import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  TypeOrmHealthIndicator,
  HealthCheckResult,
  HealthIndicatorResult,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private configService: ConfigService,
  ) {}

  @Get()
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    // getting the port env var
    const BASE_URL = this.configService.get<string>('config.app.baseUrl');

    return this.health.check([
      (): Promise<HealthIndicatorResult> =>
        this.http.pingCheck('new-vendor-coverage', BASE_URL),
      (): Promise<HealthIndicatorResult> => this.db.pingCheck('database'),
    ]);
  }
}
