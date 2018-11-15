module.exports = {
  title: 'Cakeshop Docs',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Introduction', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'KomodoPlatform.com', link: 'https://komodoplatform.com' },
    ],
    sidebar: [
      {
        title: 'dApp Toolkit',
        collapsable: true,
        children: [
          [ '/dapp-toolkit/introduction.html', 'dApp Introduction'],
	  [ '/dapp-toolkit/blockchain.html', 'Blockchain' ],
	  [ '/dapp-toolkit/wallet.html', 'Wallet']
        ]
      },
      {
        title: 'Smart Contract Crypto Conditions',
	collapsable: true,
        children: [ 
          [ '/dapp-toolkit/smart-contract/introduction.html', 'CC Smart Contract Introduction'],
          [ '/dapp-toolkit/smart-contract/faucet.html', 'Faucet' ],
          [ '/dapp-toolkit/smart-contract/dice.html', 'Dice'],
          [ '/dapp-toolkit/smart-contract/oracle.html', 'Oracle'],
          [ '/dapp-toolkit/smart-contract/oracle-location.html', 'Location Oracle'],
          [ '/dapp-toolkit/smart-contract/oracle-price-feed.html', 'Price Feed Oracle'],
          [ '/dapp-toolkit/smart-contract/oracle-custom-dapp.html', 'Custom dApp Oracle']
	]
      },
      {
	title: 'Blockchain Starter Kit',
	collapsable: true,
	children: [
	  [ '/blockchain-starter-kit/introduction.html', 'Blockchain Starter Kit Introduction' ],
	  [ '/blockchain-starter-kit/ac-parameters.html', 'Blockchain Parameters' ],
	  [ '/blockchain-starter-kit/configuration.html', 'Blockchain Configuration' ],
	  [ '/blockchain-starter-kit/deployment.html', 'Blockchain Deployment' ],
	  [ '/blockchain-starter-kit/explorers.html', 'Blockchain Explorers' ],
	  [ '/blockchain-starter-kit/electrum-servers.html', 'Electrum Servers' ],
	  [ '/blockchain-starter-kit/wallet-customization.html', 'Agama Wallet Integration' ],
	  [ '/blockchain-starter-kit/dpow-security.html', 'dPoW Blockchain Security' ],
	  [ '/blockchain-starter-kit/dex-integration.html', 'DEX integration' ]
	]
      },
      {
	title: 'Custom Consensus Crypto Conditions',
	collapsable: true,
	children: [
	  [ '/custom-consensus/introduction.html', 'CC Consensus Introduction'],
	  [ '/custom-consensus/hello-world.html', 'Crypto Condition Hello World'],
	  [ '/custom-consensus/cloud9.html', 'Crypto Condition Cloud 9 IDE']
	]
      }
    ]
  }
}
