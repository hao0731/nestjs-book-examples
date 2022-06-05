import { Module } from '@nestjs/common';
import { TodoModule } from '../todo/todo.module';
import { CopyTodoController } from './copy-todo.controller';

@Module({
  imports: [TodoModule],
  controllers: [CopyTodoController],
})
export class CopyTodoModule {}
