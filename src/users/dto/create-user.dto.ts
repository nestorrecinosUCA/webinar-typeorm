import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  @MinLength(3, { message: 'email must have at least 3 characters' })
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  @MaxLength(8)
  phone: string;
}
