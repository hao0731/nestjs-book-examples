import { Controller, Scope } from '@nestjs/common';
import { LoggerService } from '../../modules/logger/logger.service';

@Controller({ scope: Scope.DEFAULT, path: 'users' })
export class UserController {
  constructor(private readonly loggerService: LoggerService) {
    console.log(`${UserController.name}: ${Math.random()}`);
  }
}
