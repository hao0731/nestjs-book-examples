import { Controller, Header, Get } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  @Header('X-Hao-headers', '1')
  getTodos() {
    return [];
  }
}
