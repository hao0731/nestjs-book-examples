import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Post()
  @UsePipes(ValidationPipe)
  createTodo(@Body() dto: CreateTodoDto) {
    return { id: 1, ...dto };
  }
}
