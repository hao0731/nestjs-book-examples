import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
