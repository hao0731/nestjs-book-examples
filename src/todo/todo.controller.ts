import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    const id = 1;
    return { id, ...dto };
  }
}
