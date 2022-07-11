import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);
