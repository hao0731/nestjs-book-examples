import { Module } from '@nestjs/common';
import { CommonModule } from '../../modules/common/common.module';
import { CopyTodoController } from './copy-todo.controller';

@Module({
  imports: [CommonModule],
  controllers: [CopyTodoController],
})
export class CopyTodoModule {}
