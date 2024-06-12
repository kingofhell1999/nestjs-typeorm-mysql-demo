import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { EthersService } from './ethers/ethers.service';
import { EthersController } from './ethers/ethers.controller';
import { EthersModule } from './ethers/ethers.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { Transaction } from './typeorm/entities/Transaction';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestjs_mysql_demo',
      entities: [User, Transaction],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Transaction]),
    ScheduleModule.forRoot(),
    UsersModule,
    EthersModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, EthersController],
  providers: [AppService, EthersService],
})
export class AppModule {}
