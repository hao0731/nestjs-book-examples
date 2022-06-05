import { Body, Controller, Post } from '@nestjs/common';
import { ITodo, TodoService } from '../todo/todo.service';

@Controller('copy-todos')
export class CopyTodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() body: ITodo) {
    this.todoService.createTodo(body);
    return body;
  }
}
