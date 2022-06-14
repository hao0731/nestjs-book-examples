import { Controller, Get, Scope } from '@nestjs/common';
import { LoggerService } from '../../modules/logger/logger.service';
import { UserService } from './user.service';

@Controller({ scope: Scope.DEFAULT, path: 'users' })
export class UserController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly userService: UserService,
  ) {
    console.log(`${UserController.name}: ${Math.random()}`);
  }

  @Get()
  getUsers() {
    return [];
  }
}
