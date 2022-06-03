import { Controller, Get, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get(':id')
  getTodo(@Param() params: { id: string }) {
    const { id } = params;
    return {
      id,
      title: `Title ${id}`,
      description: '',
    };
  }

  // @Get(':id')
  // getTodo(@Param('id') id: string) {
  //   return {
  //     id,
  //     title: `Title ${id}`,
  //     description: '',
  //   };
  // }
}
