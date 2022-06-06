import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const status = HttpStatus.BAD_REQUEST;
    const message = '出錯囉！';
    // 將 HttpException 第一個參數換成 override 即可覆蓋預設格式
    const override = { code: status, msg: message };
    throw new HttpException(message, status);
    return this.appService.getHello();
  }
}
