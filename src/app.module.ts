import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { config } from './config';
import { User } from './model/user.model';
import { Room } from './model/room.model';
import { Question } from './model/question.model';
import { Category } from './model/category.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: config.db_host,
      port: 3306,
      username: config.db_user_name,
      password: config.db_password,
      database: config.db_name,
      models: [User, Room, Question, Category],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
