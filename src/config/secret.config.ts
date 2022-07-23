import { registerAs } from '@nestjs/config';

export default registerAs('secret', () => {
  const jwt = process.env.JWT_SECRET;
  return { jwt };
});
