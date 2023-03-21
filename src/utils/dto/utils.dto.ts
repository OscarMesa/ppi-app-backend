import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

export class SuccessDto {
  @ApiProperty()
  @IsString()
  status: string;
}

export class PubSubDto {
  @ApiProperty()
  @IsObject()
  message: { data: string };
}
