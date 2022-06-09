import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getTodos() {
    return [];
  }

  @Post()
  createTodo(@Body() todo: Record<string, any>) {
    return todo;
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return { id };
  }
}
