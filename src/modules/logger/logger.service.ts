import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class LoggerService {
  constructor() {
    console.log(`${LoggerService.name}: ${Math.random()}`);
  }
}
