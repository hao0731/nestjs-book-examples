import { DynamicModule, Module, Provider } from '@nestjs/common';
import { newEnforcer } from 'casbin';
import { AuthorizationService } from './authorization.service';
import { CASBIN_ENFORCER } from './constants/token.const';
import { RegisterOptions } from './models/option.model';

@Module({})
export class AuthorizationModule {
  static register(options: RegisterOptions): DynamicModule {
    const { modelPath, policyAdapter, global } = options;
    const enforcer: Provider = {
      provide: CASBIN_ENFORCER,
      useFactory: () => {
        return newEnforcer(modelPath, policyAdapter);
      },
    };

    return {
      global,
      module: AuthorizationModule,
      providers: [enforcer, AuthorizationService],
      exports: [AuthorizationService],
    };
  }
}
