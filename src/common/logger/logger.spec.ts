import { LoggerPPI } from '@common/logger/logger.ppi';
import { Logger } from '@nestjs/common';

describe('LoggerPPI', () => {
  let logger: LoggerPPI;

  beforeEach(async () => {
    logger = new LoggerPPI();
  });

  it('should be defined', () => {
    expect(LoggerPPI).toBeDefined();
  });

  it('should log', () => {
    logger.log({
      functionName: 'test',
      message: 'test',
    });
  });

  it('should error', () => {
    logger.error({
      functionName: 'test',
      message: 'test',
      error: new Error(),
    });
  });

  it('should warn', () => {
    logger.warn({
      functionName: 'test',
      message: 'test',
    });
  });
});
