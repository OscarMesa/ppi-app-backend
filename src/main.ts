import helmet from 'fastify-helmet';

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';

import { createdocument } from '@swagger/index';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// import { ClusterService } from './cluster.service';

async function bootstrap(): Promise<void> {
  // create nestjs app
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // getting the config service
  const configService = app.get(ConfigService);



  //Active Cors
  app.enableCors({
    exposedHeaders: ['X-Total-Count', 'Content-Disposition'],
    origin: true,
    credentials: true,
    maxAge: 86400,
  });

  // ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  // getting the port env var
  const PORT = configService.get<number>('config.app.port');

  // getting the environment var
  const ENV = configService.get<string>('config.environment');

  if (ENV) {
    const environmentsToShowDocs = ['development', 'staging'];

    if (environmentsToShowDocs.includes(ENV)) {
      await app.register(helmet, {
        contentSecurityPolicy: {
          directives: {
            defaultSrc: [`'self'`],
            styleSrc: [`'self'`, `'unsafe-inline'`],
            imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
            scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          },
        },
      });

      SwaggerModule.setup('docs', app, createdocument(app), {
        explorer: true,
        swaggerOptions: { filter: true, showRequestDuration: true },
      });
    }
  }

  // starting the server
  await app.listen(PORT, '0.0.0.0', () => {
    Logger.log(`ppi application initialized successfully in the port ${PORT}`);
  });
}

bootstrap();

// ClusterService.clusterize(bootstrap);
