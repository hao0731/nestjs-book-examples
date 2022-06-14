import { Controller, Scope } from '@nestjs/common';
import { LoggerService } from '../../modules/logger/logger.service';

@Controller({ scope: Scope.DEFAULT, path: 'todos' })
export class TodoController {
  constructor(private readonly loggerService: LoggerService) {
    console.log(`${TodoController.name}: ${Math.random()}`);
  }
}
