import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(private readonly moduleRef: ModuleRef) {
    this.appService = this.moduleRef.get(AppService);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
