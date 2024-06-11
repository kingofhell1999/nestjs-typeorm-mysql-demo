import { Module } from '@nestjs/common';
import { EthersController } from './ethers.controller';
import { EthersService } from './ethers.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [EthersController],
  providers: [EthersService],
})
export class EthersModule {}
