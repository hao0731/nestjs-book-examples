import { Controller, Get } from '@nestjs/common';
import { ApiBasicAuth } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBasicAuth()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
