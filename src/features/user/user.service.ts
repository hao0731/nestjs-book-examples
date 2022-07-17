import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public async createUser(dto: CreateUserDto) {
    const { username, email, password } = dto;
    const encrypted = await bcrypt.hash(password, 12);
    return this.userModel.create({ username, email, password: encrypted });
  }

  public async isExistUser(username: string, email: string) {
    const exist = await this.userModel
      .exists({ $or: [{ username }, { email }] })
      .exec();
    return !!exist;
  }
}
