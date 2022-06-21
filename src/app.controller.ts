import { Controller, Get } from '@nestjs/common';
import { AuthorService } from './modules/author/author.service';

@Controller()
export class AppController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getHello(): string {
    return this.authorService.getAuthor();
  }
}
