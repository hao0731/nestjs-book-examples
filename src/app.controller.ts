import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth } from './decorators/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Auth('admin')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
