import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    return [];
  }
}
