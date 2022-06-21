import { Inject, Injectable, Optional } from '@nestjs/common';

@Injectable()
export class AuthorService {
  constructor(
    @Optional() @Inject('AUTHOR') private readonly author = 'Unknown',
  ) {}

  public getAuthor() {
    return this.author;
  }
}
