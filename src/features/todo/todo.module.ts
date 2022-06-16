import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log(`${TodoModule.name}: onModuleInit`);
  }

  onApplicationBootstrap() {
    console.log(`${TodoModule.name}: onApplicationBootstrap`);
  }

  onModuleDestroy() {
    console.log(`${TodoModule.name}: onModuleDestroy`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`${TodoModule.name}: beforeApplicationShutdown`);
  }

  onApplicationShutdown(signal?: string) {
    console.log(`${TodoModule.name}: onApplicationShutdown`);
  }
}
