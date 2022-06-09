import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getTodos() {
    return [];
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return { id };
  }
}
