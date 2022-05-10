import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the person'})
  @IsString()
  name: string;

  @ApiProperty({ description: 'The email of the person'})
  @IsEmail()
  @MinLength(3, { message: 'email must have at least 3 characters' })
  email: string;

  @ApiProperty({ description: 'The age of the person', minimum: 1})
  @IsNumber()
  age: number;

  @ApiProperty({ description: 'The phone number of the person' })
  @IsString()
  @MaxLength(8)
  phone: string;
}
