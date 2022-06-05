import { Module } from '@nestjs/common';
import { CopyTodoController } from './copy-todo.controller';

@Module({
  controllers: [CopyTodoController],
})
export class CopyTodoModule {}
