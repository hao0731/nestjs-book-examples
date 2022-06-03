import { Controller, HttpCode, HttpStatus, Patch } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT)
  updateTodo() {
    return [];
  }
}
