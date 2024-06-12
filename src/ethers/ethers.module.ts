import { Module } from '@nestjs/common';
import { EthersController } from './ethers.controller';
import { EthersService } from './ethers.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from '../typeorm/entities/Transaction';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), ConfigModule.forRoot()],
  controllers: [EthersController],
  providers: [EthersService],
})
export class EthersModule {}
