import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';
import serverConfig from './config/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig, serverConfig],
      envFilePath: ['development.local.env', 'development.env'],
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
