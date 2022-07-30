import { Inject, Injectable } from '@nestjs/common';
import { Enforcer } from 'casbin';
import { CASBIN_ENFORCER } from './constants/token.const';
import { AuthorizationAction } from './types/action.type';

@Injectable()
export class AuthorizationService {
  constructor(@Inject(CASBIN_ENFORCER) private readonly enforcer: Enforcer) {}

  public checkPermission(
    subject: string,
    object: string,
    action: AuthorizationAction,
  ) {
    return this.enforcer.enforce(subject, object, action);
  }

  public mappingAction(method: string) {
    const table: Record<string, AuthorizationAction> = {
      GET: AuthorizationAction.READ,
      POST: AuthorizationAction.CREATE,
      PUT: AuthorizationAction.UPDATE,
      PATCH: AuthorizationAction.UPDATE,
      DELETE: AuthorizationAction.DELETE,
    };

    return table[method.toUpperCase()];
  }
}
