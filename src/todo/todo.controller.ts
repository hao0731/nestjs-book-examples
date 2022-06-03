import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    return [];
  }

  @Get('exam*ples')
  getExamples() {
    return [
      {
        id: 1,
        title: 'Example 1',
        description: '',
      }
    ];
  }
}
