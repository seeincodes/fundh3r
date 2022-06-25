import { GnosisSafe } from '../../../../typechain/src/ethers-v5/v1.3.0/GnosisSafe';
import GnosisSafeContractEthers from '../GnosisSafeContractEthers';
declare class GnosisSafeContract_V1_3_0_Ethers extends GnosisSafeContractEthers {
    contract: GnosisSafe;
    constructor(contract: GnosisSafe);
    getModules(): Promise<string[]>;
    isModuleEnabled(moduleAddress: string): Promise<boolean>;
}
export default GnosisSafeContract_V1_3_0_Ethers;
