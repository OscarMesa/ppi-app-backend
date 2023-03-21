import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import appConfig from '@config/app.config';
import appConfigSchema from '@config/app.schema';
import { GcpPubsubService } from './gcp-pubsub.service';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../../../.env.example');

describe('GcpPubsubService', () => {
  let service: GcpPubsubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GcpPubsubService],
      imports: [
        ConfigModule.forRoot({
          load: [appConfig],
          envFilePath: envPath,
          validationSchema: appConfigSchema,
        }),
      ],
    }).compile();

    service = module.get<GcpPubsubService>(GcpPubsubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
