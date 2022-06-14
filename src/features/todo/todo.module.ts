import { Module } from '@nestjs/common';
import { LoggerModule } from '../../modules/logger/logger.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [LoggerModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
