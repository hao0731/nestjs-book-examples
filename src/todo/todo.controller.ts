import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { of } from 'rxjs';

@Controller('todos')
export class TodoController {
  /** Promise */
  @Get()
  getTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([]), 1000);
    });
  }

  /** async/await */
  // @Get()
  // async getTodos() {
  //   const todos = await new Promise((resolve, reject) => {
  //     setTimeout(() => resolve([]), 1000);
  //   });
  //   return todos;
  // }

  /** RxJS */
  // @Get()
  // getTodos() {
  //   return of([]);
  // }

  /** Library response */
  // @Get()
  // getTodos(@Res() res: Response) {
  //   res.send([]);
  // }

  /** Invalid response */
  // @Get()
  // getTodos(@Res() res: Response) {
  //   return [];
  // }

  /** Hybrid response */
  // @Get()
  // getTodos(@Res({ passthrough: true }) res: Response) {
  //   return [];
  // }
}
