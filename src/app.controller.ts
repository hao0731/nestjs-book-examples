import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTHOR_NAME') private readonly author: string,
  ) {
    console.log('Class Provider: ', this.appService);
    console.log('Value Provider: ', this.author);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
