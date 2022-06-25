import { TransactionResponse } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { Provider } from '@ethersproject/providers';
import { Eip3770Address, EthAdapter, EthAdapterTransaction, GetContractProps } from '@gnosis.pm/safe-core-sdk-types';
import { ethers } from 'ethers';
import GnosisSafeContractEthers from './contracts/GnosisSafe/GnosisSafeContractEthers';
import GnosisSafeProxyFactoryEthersContract from './contracts/GnosisSafeProxyFactory/GnosisSafeProxyFactoryEthersContract';
import MultiSendEthersContract from './contracts/MultiSend/MultiSendEthersContract';
declare type Ethers = typeof ethers;
export interface EthersAdapterConfig {
    /** ethers - Ethers v5 library */
    ethers: Ethers;
    /** signer - Ethers signer */
    signer: Signer;
}
declare class EthersAdapter implements EthAdapter {
    #private;
    constructor({ ethers, signer }: EthersAdapterConfig);
    getProvider(): Provider;
    getSigner(): Signer;
    isAddress(address: string): boolean;
    getEip3770Address(fullAddress: string): Promise<Eip3770Address>;
    getBalance(address: string): Promise<BigNumber>;
    getChainId(): Promise<number>;
    getSafeContract({ safeVersion, chainId, singletonDeployment, customContractAddress }: GetContractProps): GnosisSafeContractEthers;
    getMultiSendContract({ safeVersion, chainId, singletonDeployment, customContractAddress }: GetContractProps): MultiSendEthersContract;
    getSafeProxyFactoryContract({ safeVersion, chainId, singletonDeployment, customContractAddress }: GetContractProps): GnosisSafeProxyFactoryEthersContract;
    getContractCode(address: string): Promise<string>;
    isContractDeployed(address: string): Promise<boolean>;
    getTransaction(transactionHash: string): Promise<TransactionResponse>;
    getSignerAddress(): Promise<string>;
    signMessage(message: string): Promise<string>;
    estimateGas(transaction: EthAdapterTransaction): Promise<number>;
    call(transaction: EthAdapterTransaction): Promise<string>;
}
export default EthersAdapter;
