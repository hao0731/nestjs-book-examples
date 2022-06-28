import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller()
export class AppController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }

  @Post('multiple')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'file1', maxCount: 2 },
      { name: 'file2', maxCount: 2 },
    ]),
  )
  uploadMultipleFiles(
    @UploadedFiles() files: Record<string, Express.Multer.File[]>,
  ) {
    return files;
  }
}
