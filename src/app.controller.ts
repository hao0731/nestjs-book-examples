import {
  Controller,
  Get,
  NotAcceptableException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getUser(
    @Param(
      'id',
      new ParseIntPipe({
        exceptionFactory: () => {
          return new NotAcceptableException('無法解析為數字');
        },
      }),
    )
    id: number,
  ) {
    return this.appService.getUser(id);
  }
}
