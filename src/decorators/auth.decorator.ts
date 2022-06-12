import { applyDecorators, UseGuards } from '@nestjs/common';
import { RoleGuard } from 'src/guards/role.guard';
import { Roles } from './roles.decorator';

export const Auth = (...roles: string[]) =>
  applyDecorators(Roles(...roles), UseGuards(RoleGuard));
