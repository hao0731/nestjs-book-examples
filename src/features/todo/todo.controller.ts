import {
  Body,
  Controller,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  updateTodo(@Param('id') id: number, @Body() dto: UpdateTodoDto) {
    return { id, ...dto };
  }
}
