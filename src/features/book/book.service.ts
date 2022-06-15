import { Injectable, Scope } from '@nestjs/common';
import { StorageService } from '../../modules/storage/storage.service';

@Injectable({ scope: Scope.REQUEST })
export class BookService {
  constructor(private readonly storageService: StorageService) {
    console.log(`${BookService.name}: ${Math.random()}`);
  }
}
