import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { isEmail } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop({
    required: true,
    minlength: 3,
    maxlength: 20,
  })
  username: string;

  @Prop({
    required: true,
    validate: {
      validator: (input: string) => isEmail(input),
    },
  })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
