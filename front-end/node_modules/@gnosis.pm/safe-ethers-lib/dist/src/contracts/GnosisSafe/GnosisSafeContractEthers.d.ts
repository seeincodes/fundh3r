import { BigNumber } from '@ethersproject/bignumber';
import { GnosisSafeContract, SafeTransaction, SafeTransactionData, SafeVersion } from '@gnosis.pm/safe-core-sdk-types';
import { GnosisSafe as GnosisSafe_V1_1_1 } from '../../../typechain/src/ethers-v5/v1.1.1/GnosisSafe';
import { GnosisSafe as GnosisSafe_V1_2_0 } from '../../../typechain/src/ethers-v5/v1.2.0/GnosisSafe';
import { GnosisSafe as GnosisSafe_V1_3_0, GnosisSafeInterface } from '../../../typechain/src/ethers-v5/v1.3.0/GnosisSafe';
import { EthersTransactionOptions, EthersTransactionResult } from '../../types';
declare abstract class GnosisSafeContractEthers implements GnosisSafeContract {
    contract: GnosisSafe_V1_1_1 | GnosisSafe_V1_2_0 | GnosisSafe_V1_3_0;
    constructor(contract: GnosisSafe_V1_1_1 | GnosisSafe_V1_2_0 | GnosisSafe_V1_3_0);
    getVersion(): Promise<SafeVersion>;
    getAddress(): string;
    getNonce(): Promise<number>;
    getThreshold(): Promise<number>;
    getOwners(): Promise<string[]>;
    isOwner(address: string): Promise<boolean>;
    getTransactionHash(safeTransactionData: SafeTransactionData): Promise<string>;
    approvedHashes(ownerAddress: string, hash: string): Promise<BigNumber>;
    approveHash(hash: string, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    abstract getModules(): Promise<string[]>;
    abstract isModuleEnabled(moduleAddress: string): Promise<boolean>;
    execTransaction(safeTransaction: SafeTransaction, options?: EthersTransactionOptions): Promise<EthersTransactionResult>;
    encode: GnosisSafeInterface['encodeFunctionData'];
    estimateGas(methodName: string, params: any[], options: EthersTransactionOptions): Promise<number>;
}
export default GnosisSafeContractEthers;
