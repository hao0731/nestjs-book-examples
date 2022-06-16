import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    console.log(`${AppService.name}: onModuleInit`);
  }

  onApplicationBootstrap() {
    console.log(`${AppService.name}: onApplicationBootstrap`);
  }

  onModuleDestroy() {
    console.log(`${AppService.name}: onModuleDestroy`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`${AppService.name}: beforeApplicationShutdown`);
  }

  onApplicationShutdown(signal?: string) {
    console.log(`${AppService.name}: onApplicationShutdown`);
  }
}
