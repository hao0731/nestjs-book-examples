import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHello() {
    /** 取出物件下特定值可以用這種方式 */
    // const username = this.configService.get('database.username');

    const database = this.configService.get('database');
    const port = this.configService.get('port');
    return { database, port };
  }
}
