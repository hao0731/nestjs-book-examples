import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @MinLength(1)
  @MaxLength(20)
  public readonly title: string;

  @IsOptional()
  @MaxLength(200)
  public readonly description?: string;
}
