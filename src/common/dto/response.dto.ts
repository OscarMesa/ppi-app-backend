import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResponseDto<T> {
  @IsNotEmpty()
  data: T;

  @IsNotEmpty()
  errorMessage: string;
  @ApiProperty({
    description: 'Http Response status code',
    type: 'number',
    example: 200,
  })
  @IsNotEmpty()
  statusCode: number;

  constructor(data: T, statusCode: number, errorMessage = '') {
    this.data = data;
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
  }
}
