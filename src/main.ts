import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // const app = await NestFactory.create(AppModule, {
  //   cors: { origin: 'https://www.google.com' },
  // });
  // app.enableCors();
  // app.enableCors({ origin: 'https://www.google.com' });
  await app.listen(3000);
}
bootstrap();
