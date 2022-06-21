import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './modules/author/author.module';

@Module({
  imports: [AuthorModule.register('HAO')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
