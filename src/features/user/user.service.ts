import { Injectable, Scope } from '@nestjs/common';
import { LoggerService } from '../../modules/logger/logger.service';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(private readonly loggerService: LoggerService) {
    console.log(`${UserService.name}: ${Math.random()}`);
  }
}
