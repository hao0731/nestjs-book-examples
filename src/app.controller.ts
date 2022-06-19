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
    const contextId = ContextIdFactory.create();
    this.moduleRef.registerRequestByContextId(this.request, contextId);
    this.appService = await this.moduleRef.resolve(AppService, contextId);
    return this.appService.getHello();
  }
}
