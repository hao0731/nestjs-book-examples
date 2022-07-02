import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { ITodo } from './models/todo.model';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getTodos() {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    return this.httpService
      .get<ITodo>('/todos', { baseURL: baseUrl })
      .pipe(map(({ data }) => data));
  }
}
