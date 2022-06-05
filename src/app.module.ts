import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // AppService,
    { provide: AppService, useClass: AppService },
    { provide: 'AUTHOR_NAME', useValue: 'HAO' },
  ],
})
export class AppModule {}
