import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = response.statusCode;
    const { method, originalUrl } = request;
    console.log(`[${method.toUpperCase()}] ${originalUrl}`);
    return next.handle().pipe(
      map((data) => {
        const timestamp = new Date().toISOString();
        return { status, data, timestamp };
      }),
    );
  }
}
