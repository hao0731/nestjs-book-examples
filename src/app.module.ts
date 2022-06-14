import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
