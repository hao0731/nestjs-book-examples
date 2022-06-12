import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MockUserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.user = { name: 'HAO' };
    next();
  }
}
