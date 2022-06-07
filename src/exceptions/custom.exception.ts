import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor() {
    super('未知的錯誤', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
