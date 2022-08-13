import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useFactory: () => {
        return new ValidationPipe({ transform: true });
      },
    },
  ],
})
export class AppModule {}
