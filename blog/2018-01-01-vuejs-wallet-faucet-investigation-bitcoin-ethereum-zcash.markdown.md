
A lot of cryptocurrency projects are using ReactJS for their wallets but I went for a quick look around for how I would get started with a Vue Cryptocurrency Wallet.  Looking around to see how much code re-use I can get out of a VueJS Faucet for Komodo and a VueJS Wallet for Komodo.

A faucet leaks coins at a very slow drip rate into a wallet.  So using Vue for form input is trivial.  The backend would need to communicate with the cryptocurrency daemon running in order to send a small amount of coins to the wallet.

A crypto wallet is simply needed to create, view, send and receive funds.  Either talking to a full node daemon or an electrum server for a lite mode (SPV, simple payment verification) for lightweight use.

I will try and bang out as much functionality as possible with little effort to learn a bit more of what I will have to do more of in the future!



 	
  * [Zcash minimal nodejs library](https://github.com/montyanderson/zcash), MIT license.

 	
  * [A wallet and tangle explorer for IOTA](https://github.com/lsquires/open-iota), early stages and MIT licensed.

 	
  * A [vue eth wallet](https://github.com/sc0Vu/vuethwallet), MIT license.

 	
  * A [full node javascript bitcoin node](https://github.com/bcoin-org/bcoin), probably better to test on a cloud server with remote desktop from the warning!  MIT license and well documented.

 	
  * [Simple vue wallet for bitcore api](https://github.com/iJackUA/my-btc-wallet)

 	
  * A javascript [faucet for Augur](https://github.com/AugurProject/faucet)

 	
  * Some old [bitcoin faucet in perl](https://github.com/hippich/Faucet)

 	
  * Some random [php faucet](https://github.com/phpfaucet/faucet)

 	
  * A recently updated/created/contributed to [php faucet project](https://github.com/ChristianGrieger/Cryptocurrency-faucet-script)

 	
  * An updated bitcoin [faucet for mojocoin](https://github.com/plaprade/Mojocoin-Faucet)

 	
  * [Faucet for the lightning network](https://github.com/lightninglabs/lightning-faucet)

 	
  * [A bytecoin faucet](https://github.com/Ratnet/Bytecoin-Faucet)

 	
  * A clone of, [faucet in a box](https://github.com/faucetfly/faucetinabox)

 	
  * Maybe the easiest to implement [faucet for bitcoin testnet](https://github.com/jprichardson/bitcoin-faucet)

 	
  * A [nodejs faucet for bitcoin, litecoin](https://github.com/clapyohands/cryptofaucet-node) etc.


So just an initial browse around github to test which pathway to take for development.
