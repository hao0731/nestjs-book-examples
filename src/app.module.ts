import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandsomeModule } from './modules/handsome/handsome.module';

export class MessageBox {
  constructor(public readonly message: string) {}
}

@Module({
  imports: [HandsomeModule],
  controllers: [AppController],
  providers: [
    // AppService,
    { provide: AppService, useClass: AppService },
    { provide: 'AUTHOR_NAME', useValue: 'HAO' },
    {
      provide: 'MESSAGE_BOX',
      useFactory: (appService: AppService) => {
        const message = appService.getHello();
        return new MessageBox(message);
      },
      inject: [AppService],
    },
    { provide: 'ALIAS_APP_SERVICE', useExisting: AppService },
  ],
})
export class AppModule {}
