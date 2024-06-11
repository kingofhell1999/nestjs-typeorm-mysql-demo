import { Controller, Get, Query } from '@nestjs/common';
import { EthersService } from './ethers.service';

@Controller('ethers')
export class EthersController {
  startBlock = 9057312;
  constructor(private readonly ethersService: EthersService) {}

  @Get('transactions')
  async getTransactions() {
    // try {
    //   const from = this.startBlock;
    //   const to = this.startBlock + 100;
    //   const lim = 100;
    //   return this.ethersService.getTransactions(from, to, lim);
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   this.startBlock += 100;
    // }
  }

  @Get('token-price')
  async getTokenPrice() {
    return this.ethersService.getTokenPrice();
  }
}
