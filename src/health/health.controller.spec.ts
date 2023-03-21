import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { Test } from '@nestjs/testing';

import appConfig from '../config/app.config';
import appConfigSchema from '../config/app.schema';

import { HealthController } from './health.controller';

const envPath = path.resolve(__dirname, '../../.env.example');

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [appConfig],
          envFilePath: envPath,
          validationSchema: appConfigSchema,
        }),
      ],
      controllers: [HealthController],
      providers: [
        {
          provide: HealthCheckService,
          useValue: HealthCheckService,
        },
        {
          provide: HttpHealthIndicator,
          useClass: HttpHealthIndicator,
        },
        {
          provide: TypeOrmHealthIndicator,
          useClass: TypeOrmHealthIndicator,
        },
      ],
    }).compile();
    controller = new HealthController(
      HealthCheckService.prototype,
      HttpHealthIndicator.prototype,
      TypeOrmHealthIndicator.prototype,
      ConfigService.prototype,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('health check', () => {
    jest.spyOn(ConfigService.prototype, 'get').mockReturnValue('data' as never);
    jest
      .spyOn(HealthCheckService.prototype, 'check')
      .mockReturnValue('data' as never);
    jest
      .spyOn(HttpHealthIndicator.prototype, 'pingCheck')
      .mockReturnValue('data' as never);
    jest
      .spyOn(TypeOrmHealthIndicator.prototype, 'pingCheck')
      .mockReturnValue('data' as never);
    const result = controller.check();
    expect(result).toBe('data');
  });
});
