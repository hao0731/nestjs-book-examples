import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { map, Observable, timer } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 兩秒後回傳 false
    return timer(2000).pipe(map(() => false));
  }
}
