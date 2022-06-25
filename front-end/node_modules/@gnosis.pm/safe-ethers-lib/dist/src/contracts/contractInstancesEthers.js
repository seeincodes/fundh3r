"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSafeProxyFactoryContractInstance = exports.getMultiSendContractInstance = exports.getSafeContractInstance = void 0;
const GnosisSafe__factory_1 = require("../../typechain/src/ethers-v5/v1.1.1/factories/GnosisSafe__factory");
const MultiSend__factory_1 = require("../../typechain/src/ethers-v5/v1.1.1/factories/MultiSend__factory");
const ProxyFactory__factory_1 = require("../../typechain/src/ethers-v5/v1.1.1/factories/ProxyFactory__factory");
const GnosisSafe__factory_2 = require("../../typechain/src/ethers-v5/v1.2.0/factories/GnosisSafe__factory");
const GnosisSafe__factory_3 = require("../../typechain/src/ethers-v5/v1.3.0/factories/GnosisSafe__factory");
const MultiSend__factory_2 = require("../../typechain/src/ethers-v5/v1.3.0/factories/MultiSend__factory");
const ProxyFactory__factory_2 = require("../../typechain/src/ethers-v5/v1.3.0/factories/ProxyFactory__factory");
const GnosisSafeContract_V1_1_1_Ethers_1 = __importDefault(require("./GnosisSafe/v1.1.1/GnosisSafeContract_V1_1_1_Ethers"));
const GnosisSafeContract_V1_2_0_Ethers_1 = __importDefault(require("./GnosisSafe/v1.2.0/GnosisSafeContract_V1_2_0_Ethers"));
const GnosisSafeContract_V1_3_0_Ethers_1 = __importDefault(require("./GnosisSafe/v1.3.0/GnosisSafeContract_V1_3_0_Ethers"));
const GnosisSafeProxyFactoryContract_V1_1_1_Ethers_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.1.1/GnosisSafeProxyFactoryContract_V1_1_1_Ethers"));
const GnosisSafeProxyFactoryContract_V1_3_0_Ethers_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.3.0/GnosisSafeProxyFactoryContract_V1_3_0_Ethers"));
const MultiSendContract_V1_1_1_Ethers_1 = __importDefault(require("./MultiSend/v1.1.1/MultiSendContract_V1_1_1_Ethers"));
const MultiSendContract_V1_3_0_Ethers_1 = __importDefault(require("./MultiSend/v1.3.0/MultiSendContract_V1_3_0_Ethers"));
function getSafeContractInstance(safeVersion, contractAddress, signer) {
    let safeContract;
    switch (safeVersion) {
        case '1.3.0':
            safeContract = GnosisSafe__factory_3.GnosisSafe__factory.connect(contractAddress, signer);
            return new GnosisSafeContract_V1_3_0_Ethers_1.default(safeContract);
        case '1.2.0':
            safeContract = GnosisSafe__factory_2.GnosisSafe__factory.connect(contractAddress, signer);
            return new GnosisSafeContract_V1_2_0_Ethers_1.default(safeContract);
        case '1.1.1':
            safeContract = GnosisSafe__factory_1.GnosisSafe__factory.connect(contractAddress, signer);
            return new GnosisSafeContract_V1_1_1_Ethers_1.default(safeContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getSafeContractInstance = getSafeContractInstance;
function getMultiSendContractInstance(safeVersion, contractAddress, signer) {
    let multiSendContract;
    switch (safeVersion) {
        case '1.3.0':
            multiSendContract = MultiSend__factory_2.MultiSend__factory.connect(contractAddress, signer);
            return new MultiSendContract_V1_3_0_Ethers_1.default(multiSendContract);
        case '1.2.0':
        case '1.1.1':
            multiSendContract = MultiSend__factory_1.MultiSend__factory.connect(contractAddress, signer);
            return new MultiSendContract_V1_1_1_Ethers_1.default(multiSendContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getMultiSendContractInstance = getMultiSendContractInstance;
function getSafeProxyFactoryContractInstance(safeVersion, contractAddress, signer) {
    let gnosisSafeProxyFactoryContract;
    switch (safeVersion) {
        case '1.3.0':
            gnosisSafeProxyFactoryContract = ProxyFactory__factory_2.ProxyFactory__factory.connect(contractAddress, signer);
            return new GnosisSafeProxyFactoryContract_V1_3_0_Ethers_1.default(gnosisSafeProxyFactoryContract);
        case '1.2.0':
        case '1.1.1':
            gnosisSafeProxyFactoryContract = ProxyFactory__factory_1.ProxyFactory__factory.connect(contractAddress, signer);
            return new GnosisSafeProxyFactoryContract_V1_1_1_Ethers_1.default(gnosisSafeProxyFactoryContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getSafeProxyFactoryContractInstance = getSafeProxyFactoryContractInstance;
//# sourceMappingURL=contractInstancesEthers.js.map