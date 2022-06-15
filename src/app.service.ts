import { Injectable } from '@nestjs/common';
import { StorageService } from './modules/storage/storage.service';
import { BookService } from './features/book/book.service';

@Injectable()
export class AppService {
  constructor(
    private readonly storageService: StorageService,
    private readonly bookService: BookService,
  ) {
    console.log(`${AppService.name}: ${Math.random()}`);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
