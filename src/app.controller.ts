import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseFilters(HttpExceptionFilter)
  @Get()
  getHello(): string {
    // throw new HttpException('出錯囉！', HttpStatus.BAD_REQUEST);
    throw new BadRequestException('出錯囉！');
    return this.appService.getHello();
  }
}
