import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { name: 'Politécnico Colombiano Jaime Isaza Cadavid', message: 'PPI API!' };
  }
}
