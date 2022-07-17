import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    const { username, email } = dto;
    const isExist = await this.userService.isExistUser(username, email);

    if (isExist) {
      const message = 'username or email is already exists.';
      throw new BadRequestException(message);
    }

    return this.userService.createUser(dto);
  }
}
