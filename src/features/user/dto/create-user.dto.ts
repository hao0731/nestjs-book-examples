import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public readonly firstName: string;

  @IsString()
  public readonly lastName: string;

  @IsEmail()
  public readonly email: string;
}
