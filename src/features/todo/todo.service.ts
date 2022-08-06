import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Todo, TodoDocument } from './models/todo.model';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  public createTodo(dto: CreateTodoDto) {
    const data = { ...dto, completed: false };
    return this.todoModel.create(data);
  }

  public getTodos(
    filter: FilterQuery<TodoDocument> = {},
    skip = 0,
    limit = 30,
  ) {
    return this.todoModel.find(filter).skip(skip).limit(limit).exec();
  }

  public getTodo(id: string) {
    return this.todoModel.findById(id).exec();
  }

  public updateTodo(id: string, dto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  public deleteTodo(id: string) {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
