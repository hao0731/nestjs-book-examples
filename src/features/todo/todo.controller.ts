import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@ApiTags('Todo')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiHeader({ name: 'X-Custom' })
  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The todo has been successfully created.',
  })
  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto);
  }

  @ApiBody({ type: [CreateTodoDto] })
  @Post('bulk')
  createTodos(@Body() dtos: CreateTodoDto[]) {
    return dtos.map((dto) => this.todoService.createTodo(dto));
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body() dto: UpdateTodoDto) {
    return this.todoService.updateTodo(id, dto);
  }
}
