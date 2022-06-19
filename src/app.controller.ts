import { Controller, Get, Inject, Scope } from '@nestjs/common';
import { ContextIdFactory, ModuleRef, REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller({ scope: Scope.REQUEST })
export class AppController {
  private appService: AppService;

  constructor(
    private readonly moduleRef: ModuleRef,
    @Inject(REQUEST) private readonly request: Request,
  ) {}

  @Get()
  async getHello() {
    const contextId = ContextIdFactory.getByRequest(this.request);
    const contextId2 = ContextIdFactory.getByRequest(this.request);
    this.appService = await this.moduleRef.resolve(AppService, contextId);
    const appService = await this.moduleRef.resolve(AppService, contextId2);
    const isSame = this.appService === appService;
    console.log(`is same: ${isSame}`);
    return this.appService.getHello();
  }
}
