"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EthersAdapter_ethers, _EthersAdapter_signer, _EthersAdapter_provider;
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const safe_core_sdk_utils_1 = require("@gnosis.pm/safe-core-sdk-utils");
const contractInstancesEthers_1 = require("./contracts/contractInstancesEthers");
class EthersAdapter {
    constructor({ ethers, signer }) {
        _EthersAdapter_ethers.set(this, void 0);
        _EthersAdapter_signer.set(this, void 0);
        _EthersAdapter_provider.set(this, void 0);
        if (!ethers) {
            throw new Error('ethers property missing from options');
        }
        if (!signer.provider) {
            throw new Error('Signer must be connected to a provider');
        }
        __classPrivateFieldSet(this, _EthersAdapter_signer, signer, "f");
        __classPrivateFieldSet(this, _EthersAdapter_provider, signer.provider, "f");
        __classPrivateFieldSet(this, _EthersAdapter_ethers, ethers, "f");
    }
    getProvider() {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f");
    }
    getSigner() {
        return __classPrivateFieldGet(this, _EthersAdapter_signer, "f");
    }
    isAddress(address) {
        return __classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.isAddress(address);
    }
    async getEip3770Address(fullAddress) {
        const chainId = await this.getChainId();
        return (0, safe_core_sdk_utils_1.validateEip3770Address)(fullAddress, chainId);
    }
    async getBalance(address) {
        return bignumber_1.BigNumber.from(await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getBalance(address));
    }
    async getChainId() {
        return (await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getNetwork()).chainId;
    }
    getSafeContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid Safe Proxy contract address');
        }
        return (0, contractInstancesEthers_1.getSafeContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    getMultiSendContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid Multi Send contract address');
        }
        return (0, contractInstancesEthers_1.getMultiSendContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    getSafeProxyFactoryContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid Safe Proxy Factory contract address');
        }
        return (0, contractInstancesEthers_1.getSafeProxyFactoryContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    async getContractCode(address) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getCode(address);
    }
    async isContractDeployed(address) {
        const contractCode = await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getCode(address);
        return contractCode !== '0x';
    }
    async getTransaction(transactionHash) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getTransaction(transactionHash);
    }
    async getSignerAddress() {
        return __classPrivateFieldGet(this, _EthersAdapter_signer, "f").getAddress();
    }
    signMessage(message) {
        const messageArray = __classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.arrayify(message);
        return __classPrivateFieldGet(this, _EthersAdapter_signer, "f").signMessage(messageArray);
    }
    async estimateGas(transaction) {
        return (await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").estimateGas(transaction)).toNumber();
    }
    call(transaction) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").call(transaction);
    }
}
_EthersAdapter_ethers = new WeakMap(), _EthersAdapter_signer = new WeakMap(), _EthersAdapter_provider = new WeakMap();
exports.default = EthersAdapter;
//# sourceMappingURL=EthersAdapter.js.map