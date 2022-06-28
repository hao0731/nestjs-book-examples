import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }

  @Post('multiple')
  @UseInterceptors(AnyFilesInterceptor())
  uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return files;
  }
}
