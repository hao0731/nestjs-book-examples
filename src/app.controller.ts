import { Controller, Get, Inject } from '@nestjs/common';
import { MessageBox } from './app.module';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTHOR_NAME') private readonly author: string,
    @Inject('MESSAGE_BOX') private readonly messageBox: MessageBox,
    @Inject('ALIAS_APP_SERVICE') private readonly aliasAppService: AppService,
  ) {
    console.log('Class Provider: ', this.appService);
    console.log('Value Provider: ', this.author);
    console.log('Factory Provider: ', this.messageBox);
    console.log('Alias Provider: ', this.aliasAppService);
    console.log(
      'Is Alias Provider the same as AppService?',
      this.aliasAppService === this.appService,
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
