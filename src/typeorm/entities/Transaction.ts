import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userAddress: string;

  @Column()
  tokenIn: string;

  @Column()
  tokenOut: string;

  @Column('decimal')
  amountIn: number;

  @Column('decimal')
  amountOut: number;

  @Column('decimal')
  usdPrice: number;
}
