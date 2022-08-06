import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ versionKey: false, timestamps: true })
export class Todo {
  @Prop({
    required: true,
    minlength: 1,
    maxlength: 20,
  })
  title: string;

  @Prop({
    maxlength: 200,
  })
  description?: string;

  @Prop({
    required: true,
  })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
