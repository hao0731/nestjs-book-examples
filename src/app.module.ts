import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MulterModule.register({
      // dest: './upload',
      storage: diskStorage({
        destination: (req, file, callback) => {
          const path = join(__dirname, '../upload');
          callback(null, path);
        },
        filename: (req, file, callback) => {
          const { originalname } = file;
          const timestamp = Date.now();
          const filename = `${timestamp}-${originalname}`;
          callback(null, filename);
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
