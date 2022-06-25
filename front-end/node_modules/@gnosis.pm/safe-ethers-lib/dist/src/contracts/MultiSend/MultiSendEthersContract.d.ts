import { MultiSendContract } from '@gnosis.pm/safe-core-sdk-types';
import { MultiSend as MultiSend_V1_1_1 } from '../../../typechain/src/ethers-v5/v1.1.1/MultiSend';
import { MultiSend as MultiSend_V1_3_0, MultiSendInterface } from '../../../typechain/src/ethers-v5/v1.3.0/MultiSend';
declare abstract class MultiSendEthersContract implements MultiSendContract {
    contract: MultiSend_V1_1_1 | MultiSend_V1_3_0;
    constructor(contract: MultiSend_V1_1_1 | MultiSend_V1_3_0);
    getAddress(): string;
    encode: MultiSendInterface['encodeFunctionData'];
}
export default MultiSendEthersContract;
