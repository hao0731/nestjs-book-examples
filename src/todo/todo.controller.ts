import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    return [];
  }

  @Get('/examples')
  getExamples() {
    return [
      {
        id: 1,
        title: 'Example 1',
        description: '',
      },
    ];
  }
}
