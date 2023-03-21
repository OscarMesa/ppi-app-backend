import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { name: 'chiper', message: 'Control Tower API!' };
  }
}
