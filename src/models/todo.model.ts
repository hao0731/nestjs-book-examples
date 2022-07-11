import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true, maxlength: 20 })
  title: string;

  @Prop({ maxlength: 200 })
  description?: string;

  @Prop({ required: true })
  completed: boolean;

  @Prop({ type: [String] })
  tags: string[];
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
