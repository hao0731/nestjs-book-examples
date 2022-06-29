import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MulterModule.register({
      fileFilter: (req, file, callback) => {
        if (file.mimetype !== 'text/markdown') {
          callback(null, false);
          return;
        }
        callback(null, true);
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
