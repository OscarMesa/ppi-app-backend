import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): void {
    res.on('finish', () => {
      Logger.log({
        message: 'request logged',
        stt: 'PPI-APP',
        context: LoggingMiddleware.name,
        functionName: 'use',
        data: {
          requestedRoute: req.originalUrl,
          method: req.method,
          status: res.statusCode,
        },
      });
    });

    next();
  }
}
