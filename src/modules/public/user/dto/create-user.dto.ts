import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true, description: 'name of user' })
  @IsNotEmpty()
  @IsString({ message: 'name can not be only numbers' })
  name: string;

  @ApiProperty({ required: true, description: 'Email of user' })
  @IsNotEmpty()
  @IsString({ message: 'Email can not be only numbers' })
  @IsEmail()
  email: string;

  @ApiProperty({ nullable: false, description: "enter the user's password" })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  readonly password: string;
}
