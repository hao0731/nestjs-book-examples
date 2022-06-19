import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AppService } from './app.service';
import { StorageService } from './modules/storage/storage.service';

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(
    private readonly moduleRef: ModuleRef,
    private readonly sotrageService: StorageService,
  ) {
    this.appService = this.moduleRef.get(AppService);
    const storageService = this.moduleRef.get(StorageService, {
      strict: false,
    });
    const isSame = storageService === this.sotrageService;
    console.log(`is same: ${isSame}`);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
