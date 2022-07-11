import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from './user.model';

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

  @Prop({ type: Types.ObjectId, ref: User.name })
  owner: User;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
