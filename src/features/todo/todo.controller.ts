import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createTodo(@Body() dto: CreateTodoDto) {
    console.log(dto);
    return dto;
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getTodo(@Param('id') id: number) {
    console.log(typeof id);
    return '';
  }
}
