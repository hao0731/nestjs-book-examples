import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  private appService: AppService;

  constructor(private readonly moduleRef: ModuleRef) {}

  async onModuleInit() {
    this.appService = await this.moduleRef.resolve(AppService);
    const appService = await this.moduleRef.resolve(AppService);
    const isSame = this.appService === appService;
    console.log(`is same: ${isSame}`);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
