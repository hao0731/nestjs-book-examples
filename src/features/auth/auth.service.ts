import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public async validateUser(username: string, password: string) {
    const user = await this.userService.findUser({ username });

    if (!user) {
      return null;
    }

    const pass = await bcrypt.compare(password, user.password);

    if (!pass) {
      return null;
    }

    return user;
  }
}
