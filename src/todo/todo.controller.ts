import { Controller, Get, Query } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getQuery(@Query() query: { limit: string; skip: string }) {
    return query;
  }

  // @Get()
  // getQuery(@Query('limit') limit: string, @Query('skip') skip: string) {
  //   return { limit, skip };
  // }
}
