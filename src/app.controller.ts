import { BadRequestException, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const message = '出錯囉！';
    // 將 BadRequestException 的參數換成 override 即可覆蓋預設格式
    const override = { msg: message };
    throw new BadRequestException(override);
    return this.appService.getHello();
  }
}
