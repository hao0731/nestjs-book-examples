import { Injectable, Scope } from '@nestjs/common';
import { LoggerService } from '../../modules/logger/logger.service';

@Injectable({ scope: Scope.DEFAULT })
export class TodoService {
  constructor(private readonly loggerService: LoggerService) {
    console.log(`${TodoService.name}: ${Math.random()}`);
  }
}
