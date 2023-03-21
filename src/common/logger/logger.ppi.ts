import {
  LoggerError,
  LoggerInfo,
  LoggerWarn,
} from '@common/logger/logger.ppi.dto';
import { Logger } from '@nestjs/common';

export class LoggerDelivery {
  log(data: LoggerInfo): void {
    Logger.log({
      stt: 'PPI-APP',
      ...data,
    });
  }

  error(data: LoggerError): void {
    Logger.error({
      stt: 'PPI-APP',
      ...data,
    });
  }

  warn(data: LoggerWarn): void {
    Logger.warn({
      stt: 'PPI-APP',
      ...data,
    });
  }
}
