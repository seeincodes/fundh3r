import { EthAdapter, SafeSignature } from '@gnosis.pm/safe-core-sdk-types';
import EthSignSignature from './SafeSignature';
export declare function generatePreValidatedSignature(ownerAddress: string): SafeSignature;
export declare function isTxHashSignedWithPrefix(txHash: string, signature: string, ownerAddress: string): boolean;
export declare function adjustVInSignature(signature: string, hasPrefix: boolean): string;
export declare function generateSignature(ethAdapter: EthAdapter, hash: string): Promise<EthSignSignature>;
