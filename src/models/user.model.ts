import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { isEmail } from 'class-validator';

export interface IUserName {
  firstName: string;
  lastName: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop(
    raw({
      firstName: { type: String },
      lastName: { type: String },
    }),
  )
  name: IUserName;

  @Prop({
    required: true,
    validate: {
      validator: (input: string) => isEmail(input),
    },
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
