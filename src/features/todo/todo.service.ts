import { Injectable } from '@nestjs/common';

export interface ITodo {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TodoService {
  private todos: ITodo[] = [
    {
      id: 1,
      title: 'Title 1',
      description: '',
    },
  ];

  getTodos() {
    return this.todos;
  }
}
