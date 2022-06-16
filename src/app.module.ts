import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './features/todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log(`${AppModule.name}: onModuleInit`);
  }

  onApplicationBootstrap() {
    console.log(`${AppModule.name}: onApplicationBootstrap`);
  }

  onModuleDestroy() {
    console.log(`${AppModule.name}: onModuleDestroy`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`${AppModule.name}: beforeApplicationShutdown`);
  }

  onApplicationShutdown(signal?: string) {
    console.log(`${AppModule.name}: onApplicationShutdown`);
  }
}
