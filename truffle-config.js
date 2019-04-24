module.exports = {
  plugins: [ "truffle-security" ],

  networks: {
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.1"
    }
  }
}
