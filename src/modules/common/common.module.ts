import { Module } from '@nestjs/common';
import { TodoModule } from '../../features/todo/todo.module';

@Module({
  imports: [TodoModule],
  exports: [TodoModule],
})
export class CommonModule {}
