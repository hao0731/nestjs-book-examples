import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown(signal?: string) {
    console.log(`Signal: ${signal}`);
    console.log(`${AppModule.name}: onApplicationShutdown`);
  }
}
