import { IntersectionType, OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class MockDto {
  @IsString()
  @IsNotEmpty()
  public readonly information: string;
}

export class UpdateTodoDto extends IntersectionType(
  OmitType(CreateTodoDto, ['title']),
  MockDto,
) {}
