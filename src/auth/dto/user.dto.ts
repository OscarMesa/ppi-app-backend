import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserDTO {
  @ApiProperty({ description: 'displayName' })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  displayName: string;

  @ApiProperty({ description: 'email' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'password' })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: 'role' })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  role: string;
}
