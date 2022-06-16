import {
  BeforeApplicationShutdown,
  Controller,
  Get,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  onModuleInit() {
    console.log(`${AppController.name}: onModuleInit`);
  }

  onApplicationBootstrap() {
    console.log(`${AppController.name}: onApplicationBootstrap`);
  }

  onModuleDestroy() {
    console.log(`${AppController.name}: onModuleDestroy`);
  }

  beforeApplicationShutdown(signal?: string) {
    console.log(`${AppController.name}: beforeApplicationShutdown`);
  }

  onApplicationShutdown(signal?: string) {
    console.log(`${AppController.name}: onApplicationShutdown`);
  }
}
