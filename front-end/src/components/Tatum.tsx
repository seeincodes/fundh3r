import { TatumEthSDK } from '@tatumio/eth'

// pass API key from Tatum account available for free at https://dashboard.tatum.io/
const ethSDK = TatumEthSDK({ apiKey: '<Your API Key>' })

// pick Tatum service available from API docs
const generatedWallet = await ethSDK.api.ethGenerateWallet('<mnemonic phrase>')