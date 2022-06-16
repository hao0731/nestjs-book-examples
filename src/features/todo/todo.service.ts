import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class TodoService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log(`${TodoService.name}: onModuleInit`);
  }

  onApplicationBootstrap() {
    console.log(`${TodoService.name}: onApplicationBootstrap`);
  }

  onModuleDestroy() {
    console.log(`${TodoService.name}: onModuleDestroy`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`${TodoService.name}: beforeApplicationShutdown`);
  }

  onApplicationShutdown(signal?: string) {
    console.log(`${TodoService.name}: onApplicationShutdown`);
  }
}
