import { GnosisSafeProxyFactoryContract } from '@gnosis.pm/safe-core-sdk-types';
import { ProxyFactory as ProxyFactory_V1_1_1 } from '../../../typechain/src/ethers-v5/v1.1.1/ProxyFactory';
import { ProxyFactory as ProxyFactory_V1_3_0 } from '../../../typechain/src/ethers-v5/v1.3.0/ProxyFactory';
import { EthersTransactionOptions } from '../../types';
export interface CreateProxyProps {
    safeMasterCopyAddress: string;
    initializer: string;
    saltNonce: number;
    options?: EthersTransactionOptions;
    callback?: (txHash: string) => void;
}
declare class GnosisSafeProxyFactoryEthersContract implements GnosisSafeProxyFactoryContract {
    contract: ProxyFactory_V1_3_0 | ProxyFactory_V1_1_1;
    constructor(contract: ProxyFactory_V1_3_0 | ProxyFactory_V1_1_1);
    getAddress(): string;
    createProxy({ safeMasterCopyAddress, initializer, saltNonce, options, callback }: CreateProxyProps): Promise<string>;
    encode(methodName: string, params: any[]): string;
    estimateGas(methodName: string, params: any[], options: EthersTransactionOptions): Promise<number>;
}
export default GnosisSafeProxyFactoryEthersContract;
