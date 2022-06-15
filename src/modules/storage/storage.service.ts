import { Injectable } from '@nestjs/common';

@Injectable()
export class StorageService {
  constructor() {
    console.log(`${StorageService.name}: ${Math.random()}`);
  }
}
