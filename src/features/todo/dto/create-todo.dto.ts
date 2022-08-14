import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { TodoPriority } from '../types/todo.type';

export class CreateTodoDto {
  @ApiProperty({
    minLength: 3,
    maxLength: 20,
    description: 'Todo title',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  public readonly title: string;

  @ApiProperty({
    minLength: 1,
    maxLength: 200,
    required: false,
    description: 'Todo description',
  })
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  public readonly description?: string;

  @ApiProperty()
  @IsBoolean()
  public readonly completed: boolean;

  @ApiProperty({
    type: [String],
    required: false,
    description: 'Todo tags',
  })
  public readonly tags?: string[];

  @ApiProperty({
    enum: TodoPriority,
    enumName: 'TodoPriority',
    description: 'Todo priority',
  })
  public readonly priority: TodoPriority;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    required: false,
  })
  public readonly something?: string[][];
}
