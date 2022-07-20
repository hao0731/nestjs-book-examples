import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserPayload = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const { user } = request;
    return data ? user[data] : user;
  },
);
