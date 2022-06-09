import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseInterceptor } from './interceptors/response.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(ResponseInterceptor)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
