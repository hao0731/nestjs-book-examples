import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { flatten } from 'flat';
import { IUserName, User, UserDocument } from '../../models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  public createUser(dto: CreateUserDto) {
    const { firstName, lastName, email } = dto;
    const name: IUserName = { firstName, lastName };
    return this.userModel.create({ name, email });
  }

  public getUsers(limit = 30, skip = 0) {
    return this.userModel.find().skip(skip).limit(limit).exec();
  }

  public getUser(id: string) {
    return this.userModel.findById(id).exec();
  }

  public updateUser(id: string, dto: UpdateUserDto) {
    const { firstName, lastName, email } = dto;
    const data = {
      email,
      name: { firstName, lastName },
    };
    const obj = flatten(data);
    return this.userModel
      .findByIdAndUpdate(id, { $set: obj }, { new: true })
      .exec();
  }
}
