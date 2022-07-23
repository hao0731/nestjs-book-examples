import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { UserPayload } from './decorators/user-payload.decorator';
import { IUserPayload } from './models/payload.model';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    const { username, email } = dto;
    const isExist = await this.userService.isExistUser(username, email);

    if (isExist) {
      const message = 'username or email is already exists.';
      throw new BadRequestException(message);
    }

    const user = await this.userService.createUser(dto);
    const payload: IUserPayload = {
      id: user._id,
      username: user.username,
    };

    return this.jwtService.sign(payload);
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  signin(@UserPayload() user: IUserPayload) {
    return this.jwtService.sign(user);
  }
}
