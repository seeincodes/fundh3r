"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSignature = exports.adjustVInSignature = exports.isTxHashSignedWithPrefix = exports.generatePreValidatedSignature = void 0;
const ethereumjs_util_1 = require("ethereumjs-util");
const utils_1 = require("../../utils");
const SafeSignature_1 = __importDefault(require("./SafeSignature"));
function generatePreValidatedSignature(ownerAddress) {
    const signature = '0x000000000000000000000000' +
        ownerAddress.slice(2) +
        '0000000000000000000000000000000000000000000000000000000000000000' +
        '01';
    return new SafeSignature_1.default(ownerAddress, signature);
}
exports.generatePreValidatedSignature = generatePreValidatedSignature;
function isTxHashSignedWithPrefix(txHash, signature, ownerAddress) {
    let hasPrefix;
    try {
        const rsvSig = {
            r: Buffer.from(signature.slice(2, 66), 'hex'),
            s: Buffer.from(signature.slice(66, 130), 'hex'),
            v: parseInt(signature.slice(130, 132), 16)
        };
        const recoveredData = (0, ethereumjs_util_1.ecrecover)(Buffer.from(txHash.slice(2), 'hex'), rsvSig.v, rsvSig.r, rsvSig.s);
        const recoveredAddress = (0, ethereumjs_util_1.bufferToHex)((0, ethereumjs_util_1.pubToAddress)(recoveredData));
        hasPrefix = !(0, utils_1.sameString)(recoveredAddress, ownerAddress);
    }
    catch (e) {
        hasPrefix = true;
    }
    return hasPrefix;
}
exports.isTxHashSignedWithPrefix = isTxHashSignedWithPrefix;
function adjustVInSignature(signature, hasPrefix) {
    const V_VALUES = [0, 1, 27, 28];
    const MIN_VALID_V_VALUE = 27;
    let signatureV = parseInt(signature.slice(-2), 16);
    if (!V_VALUES.includes(signatureV)) {
        throw new Error('Invalid signature');
    }
    if (signatureV < MIN_VALID_V_VALUE) {
        signatureV += MIN_VALID_V_VALUE;
    }
    if (hasPrefix) {
        signatureV += 4;
    }
    signature = signature.slice(0, -2) + signatureV.toString(16);
    return signature;
}
exports.adjustVInSignature = adjustVInSignature;
async function generateSignature(ethAdapter, hash) {
    const signerAddress = await ethAdapter.getSignerAddress();
    let signature = await ethAdapter.signMessage(hash);
    const hasPrefix = isTxHashSignedWithPrefix(hash, signature, signerAddress);
    signature = adjustVInSignature(signature, hasPrefix);
    return new SafeSignature_1.default(signerAddress, signature);
}
exports.generateSignature = generateSignature;
//# sourceMappingURL=index.js.map