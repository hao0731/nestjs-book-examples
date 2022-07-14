import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserDocument, UserSchema } from '../../models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          UserSchema.pre('save', function (this: UserDocument, next) {
            console.log(this);
            next();
          });
          return UserSchema;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
