import { Controller, Get } from '@nestjs/common';
import { ApiOAuth2 } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOAuth2(['write', 'read', 'update'])
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
