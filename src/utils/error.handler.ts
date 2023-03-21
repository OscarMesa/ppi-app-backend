import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { LoggerError } from '@common/logger/logger.ppi.dto';

export const databaseHandler = (
  err: Error,
  data: LoggerError,
  stt = 'Delivery',
  status = HttpStatus.INTERNAL_SERVER_ERROR,
): never => {
  Logger.error({
    stt,
    ...data,
  });
  throw new HttpException(err, status);
};

export const loggerHandler = (
  err: Error,
  data: LoggerError,
  stt = 'Delivery',
): void => {
  Logger.error({
    stt,
    ...data,
  });
};
