import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
