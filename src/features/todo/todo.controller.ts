import { Controller, Get, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }
}
