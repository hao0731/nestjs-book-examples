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
    return this.httpService.get<ITodo>('/todos').pipe(map(({ data }) => data));
  }
}
