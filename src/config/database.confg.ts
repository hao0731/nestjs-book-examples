import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  const cluster = process.env.MONGO_CLUSTER;
  const encodedPassword = encodeURIComponent(password);
  const uri = `mongodb+srv://${username}:${encodedPassword}@${cluster}/?retryWrites=true&w=majority`;
  return { username, password, cluster, uri };
});
