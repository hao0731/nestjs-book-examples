import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello() {
    const domain = this.configService.get('APP_DOMAIN');
    const redirectUrl = this.configService.get('APP_REDIRECT_URL');
    return { domain, redirectUrl };
  }
}
