import { Injectable } from '@nestjs/common';
import { ITodo } from './models/todo.model';

@Injectable()
export class TodoService {
  private todos: ITodo[] = [];

  public getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }
}
