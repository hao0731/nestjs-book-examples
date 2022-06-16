import {
  BeforeApplicationShutdown,
  Controller,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly todoService: TodoService) {}

  onModuleInit() {
    console.log(`${TodoController.name}: onModuleInit`);
  }

  onApplicationBootstrap() {
    console.log(`${TodoController.name}: onApplicationBootstrap`);
  }

  onModuleDestroy() {
    console.log(`${TodoController.name}: onModuleDestroy`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`${TodoController.name}: beforeApplicationShutdown`);
  }

  onApplicationShutdown(signal?: string) {
    console.log(`${TodoController.name}: onApplicationShutdown`);
  }
}
