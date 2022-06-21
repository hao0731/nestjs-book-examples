import { DynamicModule, Module, Provider } from '@nestjs/common';
import { AuthorService } from './author.service';

@Module({
  providers: [AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {
  static register(author: string): DynamicModule {
    const authorProvider: Provider<string> = {
      provide: 'AUTHOR',
      useValue: author,
    };
    return {
      module: AuthorModule,
      providers: [AuthorService, authorProvider],
      exports: [AuthorService],
    };
  }
}
