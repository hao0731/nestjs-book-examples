import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './features/todo/todo.controller';
import { TodoModule } from './features/todo/todo.module';
import { logger } from './middlewares/functional-logger.middleware';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('todos');
    /** 帶入 Controller 套用至底下所有路由 */
    // consumer.apply(LoggerMiddleware).forRoutes(TodoController);
    /** Functional Middleware */
    // consumer.apply(logger).forRoutes('todos');
  }
}
