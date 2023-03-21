import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class LoggerInfo {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  functionName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsObject()
  @IsOptional()
  params?: object;

  @ApiProperty()
  @IsString()
  @IsOptional()
  context?: string;
}

export class LoggerError {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  functionName: string;

  @ApiProperty()
  @IsObject()
  @IsNotEmptyObject()
  error: Error;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsObject()
  @IsOptional()
  params?: object;

  @ApiProperty()
  @IsString()
  @IsOptional()
  context?: string;
}

export class LoggerWarn {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  functionName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsObject()
  @IsOptional()
  params?: object;

  @ApiProperty()
  @IsString()
  @IsOptional()
  context?: string;
}
