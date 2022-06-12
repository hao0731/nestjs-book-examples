import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const user = request.user;
    return data ? user[data] : user;
  },
);
