import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function createdocument(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('control-tower-api')
    .setDescription('Control Tower API')
    .setVersion('1.0')
    .addTag('control-tower-api')
    .addServer(`http://localhost:${process.env.PORT}`, 'Local')
    .addServer(`https://beta.api.chiper.co/control-tower-api`, 'Beta')
    .addServer(`https://staging.api.chiper.co/control-tower-api`, 'Staging')
    .build();

  return SwaggerModule.createDocument(app, config);
}
