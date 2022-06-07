import {
  Body,
  Controller,
  HttpStatus,
  NotAcceptableException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  @Post()
  @UsePipes(
    new ValidationPipe({
      exceptionFactory: () => {
        return new NotAcceptableException({
          code: HttpStatus.NOT_ACCEPTABLE,
          message: '格式錯誤',
        });
      },
    }),
  )
  createTodo(@Body() dto: CreateTodoDto) {
    return { id: 1, ...dto };
  }
}
