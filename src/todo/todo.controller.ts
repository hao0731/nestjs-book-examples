import { Controller, Post, Body } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Post()
  createTodo(@Body() data: { title: string; description?: string }) {
    return data;
  }

  // @Post()
  // createTodo(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ) {
  //   return { title, description };
  // }
}
