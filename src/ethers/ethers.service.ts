import { Injectable, OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Interval } from '@nestjs/schedule';
import SwapRouterABI from '../abis/SwapRouterABI';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from '../typeorm/entities/Transaction';

@Injectable()
export class EthersService implements OnModuleInit {
  startBlock = 9057312;
  private provider: ethers.JsonRpcProvider;
  private routerAddress: string;

  tokenMap: Map<
    string,
    {
      token: string;
      price: number;
      decimals: number;
    }
  > = new Map();

  constructor(
    private configService: ConfigService,
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {
    const rpcUrl = this.configService.get<string>('RPC_URL');
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.routerAddress = this.configService.get<string>('ROUTER_ADDRESS');
    this.initTokenInfo();
  }

  initTokenInfo() {
    this.tokenMap.set(
      '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'.toLowerCase(),
      {
        token: 'AAVE',
        price: 0,
        decimals: 18,
      },
    );
    this.tokenMap.set(
      '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7'.toLowerCase(),
      {
        token: 'USDT',
        price: 0,
        decimals: 6,
      },
    );
    this.tokenMap.set(
      '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'.toLowerCase(),
      {
        token: 'USDC',
        price: 0,
        decimals: 6,
      },
    );
    this.tokenMap.set(
      '0x130966628846BFd36ff31a822705796e8cb8C18D'.toLowerCase(),
      {
        token: 'MIM',
        price: 0,
        decimals: 18,
      },
    );
    this.tokenMap.set(
      '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'.toLowerCase(),
      {
        token: 'AVAX',
        price: 0,
        decimals: 18,
      },
    );
    this.tokenMap.set(
      '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'.toLowerCase(),
      {
        token: 'WAVAX',
        price: 0,
        decimals: 18,
      },
    );
    this.tokenMap.set(
      '0x152b9d0FdC40C096757F570A51E494bd4b943E50'.toLowerCase(),
      {
        token: 'BTC',
        price: 0,
        decimals: 8,
      },
    );
    this.tokenMap.set(
      '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15'.toLowerCase(),
      {
        token: 'ETH',
        price: 0,
        decimals: 18,
      },
    );
    this.tokenMap.set(
      '0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F'.toLowerCase(),
      {
        token: 'SOL',
        price: 0,
        decimals: 9,
      },
    );
  }

  onModuleInit() {
    // Initialize any listeners or setup tasks here
    this.getTransactions();
  }

  async getTokenPrice(token: string): Promise<number> {
    try {
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${token}USDT`,
      );
      return parseFloat(response.data.price);
    } catch (error) {
      console.error('Error fetching token price:', error);
      return 0;
    }
  }

  @Interval(5000)
  async getTransactions() {
    const routescanUrl = `https://api.routescan.io/v2/network/mainnet/evm/43114/address/${this.routerAddress}/transactions`;

    const from = this.startBlock;
    const to = this.startBlock + 100;
    const lim = 100;
    try {
      const response = await axios.get(routescanUrl, {
        params: {
          blockNumberFrom: from,
          blockNumberTo: to,
          sort: 'desc',
          limit: lim,
        },
      });
      console.log('response: ', response.data.items);
      // filter swap txs
      const swapTxs = response.data.items.filter((tx) =>
        tx.method.startsWith('swap'),
      );
      console.log('swapTxs: ', swapTxs);

      // ethers.formatUnits('1000000000000000000', 18); // parse amount token

      // read tx logs
      for (const swapTx of swapTxs) {
        const txReceipt = await this.provider.getTransactionReceipt(swapTx.id);
        const swapEvent = txReceipt.logs.find((i) =>
          i.topics.includes(
            '0xcd3829a3813dc3cdd188fd3d01dcf3268c16be2fdd2dd21d0665418816e46062',
          ),
        );
        if (swapEvent) {
          const swapRouterABIInter = new ethers.Interface(SwapRouterABI);
          const parsedLog = swapRouterABIInter.parseLog(swapEvent);

          const userAddress = parsedLog.args[0];
          const tokenInInfor = this.tokenMap.get(
            parsedLog.args[1].toLowerCase(),
          );
          const tokenOutInfor = this.tokenMap.get(
            parsedLog.args[2].toLowerCase(),
          );
          const amountIn = ethers.formatUnits(
            parsedLog.args[3],
            tokenInInfor.decimals,
          );
          const amountOut = ethers.formatUnits(
            parsedLog.args[4],
            tokenOutInfor.decimals,
          );

          console.log('userAddress: ', userAddress);
          console.log('tokenIn: ', tokenInInfor.token);
          console.log('tokenOut: ', tokenOutInfor.token);
          console.log('amountIn: ', amountIn);
          console.log('amountOut: ', amountOut);
          let usdPrice = 0;
          try {
            usdPrice = await this.getTokenPrice(tokenInInfor.token);
            console.log('usdPrice: ', usdPrice * Number(amountIn));
          } catch (error) {
            console.error('Error fetching token price:', error);
            usdPrice = 0;
          }

          const transaction = this.transactionRepository.create({
            userAddress,
            tokenIn: tokenInInfor.token,
            tokenOut: tokenOutInfor.token,
            amountIn: Number(amountIn),
            amountOut: Number(amountOut),
            usdPrice: usdPrice * Number(amountIn),
          });

          await this.transactionRepository.save(transaction);
        }
      }
      // find swap event
      this.startBlock += 100;
      console.log('startBlock: ', this.startBlock);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  }
}
