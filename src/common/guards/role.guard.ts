import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Request } from 'express';
import { Observable } from 'rxjs';

import { AuthorizationService } from '../modules/authorization';

import { IUserPayload } from '../../features/auth';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly authorizationService: AuthorizationService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const { user, method, path } = request;
    const { role } = user as IUserPayload;
    const action = this.authorizationService.mappingAction(method);
    return this.authorizationService.checkPermission(role, path, action);
  }
}
