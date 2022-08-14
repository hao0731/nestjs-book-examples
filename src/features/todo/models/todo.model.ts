import { TodoPriority } from '../types/todo.type';

export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  tags?: string[];
  priority: TodoPriority;
}
