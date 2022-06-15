import { Module } from '@nestjs/common';
import { BookService } from './book.service';

import { StorageModule } from '../../modules/storage/storage.module';

@Module({
  imports: [StorageModule],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
