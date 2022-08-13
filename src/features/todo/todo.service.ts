import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ITodo } from './models/todo.model';

@Injectable()
export class TodoService {
  private todos: ITodo[] = [];

  public getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  public createTodo(dto: CreateTodoDto) {
    const todo: ITodo = { ...dto, id: `${Math.random()}` };
    this.todos.push(todo);
    return todo;
  }

  public updateTodo(id: string, dto: UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id === id);
    Object.assign(todo, dto);
    return todo;
  }
}
