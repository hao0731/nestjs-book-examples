import { Controller, Get, Scope } from '@nestjs/common';
import { LoggerService } from '../../modules/logger/logger.service';
import { TodoService } from './todo.service';

@Controller({ scope: Scope.DEFAULT, path: 'todos' })
export class TodoController {
  constructor(
    private readonly loggerService: LoggerService,
    private readonly todoService: TodoService,
  ) {
    console.log(`${TodoController.name}: ${Math.random()}`);
  }

  @Get()
  getTodos() {
    return [];
  }
}
