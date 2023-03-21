import { Logger } from 'logging-chiper';
import { LoggerDelivery } from '@common/logger/logger.ppi';

Logger.init({
  projectId: 'test',
  service: 'tes',
});
describe('LoggerDelivery', () => {
  let logger: LoggerDelivery;

  beforeEach(async () => {
    logger = new LoggerDelivery();
  });

  it('should be defined', () => {
    expect(LoggerDelivery).toBeDefined();
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
