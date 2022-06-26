const HDWalletProvider = require('@truffle/hdwallet-provider')

require('dotenv').config()
const env = process.env

const pk_1 = env.pk_1
const pk_2 = env.pk_2

module.exports = {
  contracts_build_directory: './build',
  networks: {
    boba_rinkeby: {
      provider: function () {
        return new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY_2],
          providerOrUrl: process.env.BOBA_URL,
        })
      },
      network_id: 28,
      host: process.env.BOBA_URL,
    }
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
}