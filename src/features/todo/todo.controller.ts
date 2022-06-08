import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  @Patch(':id')
  updateTodo(@Param('id') id: number, @Body() dto: UpdateTodoDto) {
    return { id, ...dto };
  }
}
