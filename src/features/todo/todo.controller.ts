import {
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Post()
  createTodo(
    @Body(new ParseArrayPipe({ items: CreateTodoDto }))
    dtos: CreateTodoDto[],
  ) {
    return dtos;
  }

  @Get()
  getTodos(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    return ids;
  }
}
