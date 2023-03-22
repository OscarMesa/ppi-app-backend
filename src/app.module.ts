import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { CommonModule } from '@common/common.module';
import { HealthController } from '@health/health.controller';
import appConfig from '@config/app.config';
import appConfigSchema from '@config/app.schema';
import { FirebaseModule } from '@firebase/firebase.module';
import { UsersModule } from '@users/users.module';
import { Client } from 'pg';
import { FirebaseAuthStrategy } from '@auth/passport/firebase-auth.strategy';
import { AuthModule } from '@auth/auth.module';
import * as admin from 'firebase-admin';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { StudentsModule } from './students/students.module';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.applicationDefault(),
        databaseURL: 'https://ppi-app-dbdac.firebaseio.com',
      }),
    }),
    AuthModule,
    // config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: appConfigSchema,
    }),

    // TypeORM
    TypeOrmModule.forRootAsync({
      inject: [appConfig.KEY],
      useFactory: (configService: ConfigType<typeof appConfig>) => ({
        type: 'postgres',
        timezone: 'Z',
        url: configService.postgresUrl,
        synchronize: false,
        autoLoadEntities: true,
        ssl: false,
      }),
    }),

    // Common Module
    CommonModule,

    // Terminus module
    TerminusModule,

    HttpModule,

    FirebaseModule,

    // Dev Modules
    UsersModule,

    StudentsModule,
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof appConfig>): Client => {
        const client = new Client({
          connectionString: configService.postgresUrl,
          ssl: false,
        });
        client.connect();
        return client;
      },
      inject: [appConfig.KEY],
    },
    FirebaseAuthStrategy,
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class AppModule {}
