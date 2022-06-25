import { ContractTransaction } from '@ethersproject/contracts';
import { EthersTransactionOptions, EthersTransactionResult } from '../types';
export declare function sameString(str1: string, str2: string): boolean;
export declare function toTxResult(transactionResponse: ContractTransaction, options?: EthersTransactionOptions): EthersTransactionResult;
