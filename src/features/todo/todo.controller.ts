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
  @UsePipes(
    // new ValidationPipe({ whitelist: true })
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  )
  createTodo(@Body() dto: CreateTodoDto) {
    return { id: 1, ...dto };
  }
}
