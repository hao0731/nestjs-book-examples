import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}));
