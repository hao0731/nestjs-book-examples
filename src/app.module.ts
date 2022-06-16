import { BeforeApplicationShutdown, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements BeforeApplicationShutdown {
  beforeApplicationShutdown(signal?: string) {
    console.log(`Signal: ${signal}`);
    console.log(`${AppModule.name}: onModuleDestroy`);
  }
}
