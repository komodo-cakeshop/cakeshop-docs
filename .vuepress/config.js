module.exports = {
  host: '127.0.0.1',
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
	  [ '/blockchain-starter-kit/wizard.html', 'Starter Kit Wizard' ],
	  [ '/blockchain-starter-kit/checklist-new-coins.rst.txt.html', ' New Coins Checklist' ],
	  [ '/blockchain-starter-kit/checklist-new-coins.html', 'Converted New Coins Checklist' ],
	  [ '/blockchain-starter-kit/setup-electrumX-server.rst.txt.html', ' ElectrumX Setup' ],
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
	title: 'Tutorial: Crypto Conditions',
	collapsable: true,
	children: [
	  [ '/custom-consensus/introduction.html', 'CC Consensus Introduction'],
	  [ '/custom-consensus/hello-world.html', 'Crypto Condition Hello World'],
	  [ '/custom-consensus/cloud9.html', 'Crypto Condition Cloud 9 IDE']
	]
      },
      {
        title: ' BarterDEX',
        collapsable: true,
        children: [
         ['/existing/barterdex/home-barterDEX.rst.txt.html', 'BarterDEX Introduction'],
         ['/existing/barterdex/get-listed-barterDEX.rst.txt.html', 'Get Listed on BarterDEX'],
         ['/existing/barterdex/setup-electrumX-server.rst.txt.html', 'Setup ElectrumX Server']
        ]
      },{
        title: ' Building Software',
        collapsable: true,
        children: [
         ['/existing/building-software/compile-marketmaker-binary-with-static-nanomsg-in-Linux.rst.txt.html', 'Compile Marketmaker Linux'],
         ['/existing/building-software/compile-marketmaker-binary-with-static-nanomsg-in-MacOS.rst.txt.html', 'Compile Marketmaker OSX'],
         ['/existing/building-software/debug-Komodo.rst.txt.html', 'Debug Komodo'],
         ['/existing/building-software/install-barterDEX-CLI.rst.txt.html', 'Install BarterDEX CLI'],
         ['/existing/building-software/install-Komodo-manually.rst.txt.html', 'Compile Komodo']
        ]
      },{
        title: ' Best Practices',
        collapsable: true,
        children: [
         ['/existing/best-practices/note-exchanges.rst.txt.html', 'Crypto Exchange Note'],
         ['/existing/best-practices/security-setup-Komodo-Node.rst.txt.html', 'Securely Setup Komodo Node'],
         ['/existing/best-practices/setup-FR-full-relay-node-barterDEX.rst.txt.html', 'Setup Full Relay (FR) Node']
        ]
      },{
        title: ' CLI Operations',
        collapsable: true,
        children: [
         ['/existing/cli-operations/activate-cc-independent-chain.rst.txt.html', 'Activatation Height Crypto Conditions'],
         ['/existing/cli-operations/assetchains-guide-Komodo-Notary-Node.rst.txt.html', 'Assetchains For Notary Nodes'],
         ['/existing/cli-operations/test-komodo-source-jl777-branch.rst.txt.html', 'Test Forking'],
         ['/existing/cli-operations/test-use-write-integrate-cc.rst.txt.html', 'Create Crypto Conditions'],
         ['/existing/cli-operations/useful-KMD-BTC-commands.rst.txt.html', 'KMD/BTC Commands'],
         ['/existing/cli-operations/using-Key-Value.rst.txt.html', 'Using KV Store']
        ]
      },{
        title: ' Crypto Conditions',
        collapsable: true,
        children: [
         ['/existing/cryptoconditions/introduction.rst.txt.html', 'CC Intro'],
         ['/existing/cryptoconditions/test-use-write-integrate-cc.rst.txt.html', 'Overview'],
         ['/existing/cryptoconditions/tutorial.rst.txt.html', 'Tutorial']
        ]
      },{
        title: ' Dev-HOWTO',
        collapsable: true,
        children: [
         ['/existing/dev-howtos/activate-cc-independent-chain.rst.txt.html', 'Update name1'],
         ['/existing/dev-howtos/add-Komodo-Assetchains-Agama-Desktop.rst.txt.html', 'Update name2'],
         ['/existing/dev-howtos/assetchain-params.rst.txt.html', 'Update name3'],
         ['/existing/dev-howtos/create-Komodo-Assetchain.rst.txt.html', 'Update name4'],
         ['/existing/dev-howtos/debug-Komodo.rst.txt.html', 'Update name5'],
         ['/existing/dev-howtos/example-asset-chains.rst.txt.html', 'Update name6'],
         ['/existing/dev-howtos/generate-privkeys-third-party-coins-from-passphrase.rst.txt.html', 'Update name7'],
         ['/existing/dev-howtos/test-use-write-integrate-cc.rst.txt.html', 'Update name8'],
         ['/existing/dev-howtos/using-Key-Value.rst.txt.html', 'Update name9']
        ]
      },{
        title: ' Glossary',
        collapsable: true,
        children: [
         ['/existing/glossary/assetchain-params.rst.txt.html', 'Assetchain Params'],
         ['/existing/glossary/activate-cc-independent-chain.rst.txt.html', 'Activation Height CC'],
         ['/existing/glossary/Smartaddress-FAQ.rst.txt.html', 'Smart Address FAQ'],
         ['/existing/glossary/faq.rst.txt.html', 'FAQ']
        ]
      },{
        title: ' Guides',
        collapsable: true,
        children: [
         ['/existing/guides/beginner-vps-linux-assetchain.rst.txt.html', 'VPS Getting Started'],
         ['/existing/guides/create-Komodo-Assetchain.rst.txt.html', 'Create Blockchain'],
         ['/existing/guides/dPOW-conf.rst.txt.html', 'dPoW Confirmations'],
         ['/existing/guides/setup-Komodo-Notary-Node.rst.txt.html', 'Setup Notary Node'],
         ['/existing/guides/Smartaddress-FAQ.rst.txt.html', 'Smartaddress FAQ'],
         ['/existing/guides/using-JUMBLR.rst.txt.html', 'Using JUMBLR'],
        ]
      },{
        title: ' Index',
        collapsable: true,
        children: [
         ['/existing/index/list-all-KomodoPlatform-Project-links.rst.txt.html', 'Project Resources & Repositories'],
         ['/existing/index/info.rst.txt.html', 'Coin Index']
        ]
      },{
        title: ' Mylo WP Export',
        collapsable: true,
        children: [
         ['/blog/2017-10-30-building-ripple-servers.markdown.html', '2017-10-30-building-ripple-servers'],
         ['/blog/2017-10-30-site-info.markdown.html', '2017-10-30-site-info'],
         ['/blog/2017-10-30-stellar-blockchain-network-architecture.markdown.html', '2017-10-30-stellar-blockchain-network-architecture'],
         ['/blog/2017-10-30-vue-app-development-2018-watchlist.markdown.html', '2017-10-30-vue-app-development-2018-watchlist'],
         ['/blog/2017-10-30-vue-loading-screen-options-for-long-load-time-apps.markdown.html', '2017-10-30-vue-loading-screen-options-for-long-load-time-apps'],
         ['/blog/2017-10-31-pwa-cms-enhance-user-engagement.markdown.html', '2017-10-31-pwa-cms-enhance-user-engagement'],
         ['/blog/2017-11-10-2018-cpanel-vs-plesk.markdown.html', '2017-11-10-2018-cpanel-vs-plesk'],
         ['/blog/2017-11-10-serverless-deploy-aws-simple-naming-convention.markdown.html', '2017-11-10-serverless-deploy-aws-simple-naming-convention'],
         ['/blog/2017-11-14-preparing-komodo-platform-node.markdown.html', '2017-11-14-preparing-komodo-platform-node'],
         ['/blog/2017-11-23-smart-contract-developer-frameworks-2018.markdown.html', '2017-11-23-smart-contract-developer-frameworks-2018'],
         ['/blog/2017-12-06-agama-wallet-app-first-install.markdown.html', '2017-12-06-agama-wallet-app-first-install'],
         ['/blog/2017-12-06-komodod-getinfo-returns-28-error.markdown.html', '2017-12-06-komodod-getinfo-returns-28-error'],
         ['/blog/2017-12-11-copying-blockchain-data-komodo-agama-wallet.markdown.html', '2017-12-11-copying-blockchain-data-komodo-agama-wallet'],
         ['/blog/2017-12-12-first-time-gravcms-developer.markdown.html', '2017-12-12-first-time-gravcms-developer'],
         ['/blog/2017-12-19-dex-altcoin-trading-base-pair-to-bitcoin-others.markdown.html', '2017-12-19-dex-altcoin-trading-base-pair-to-bitcoin-others'],
         ['/blog/2017-12-21-update-agama-wallet-uninstall-reinstall.markdown.html', '2017-12-21-update-agama-wallet-uninstall-reinstall'],
         ['/blog/2017-12-23-accessing-xvg-project-verge-community.markdown.html', '2017-12-23-accessing-xvg-project-verge-community'],
         ['/blog/2017-12-28-notarising-blockchains-westpac-bank-blockchain-software-example.markdown.html', '2017-12-28-notarising-blockchains-westpac-bank-blockchain-software-example'],
         ['/blog/2018-01-01-vuejs-wallet-faucet-investigation-bitcoin-ethereum-zcash.markdown.html', '2018-01-01-vuejs-wallet-faucet-investigation-bitcoin-ethereum-zcash'],
         ['/blog/2018-01-04-community-based-internet-access-using-cryptocurrency.markdown.html', '2018-01-04-community-based-internet-access-using-cryptocurrency'],
         ['/blog/2018-02-05-komodo-native-mode-moving-blockchain-data.markdown.html', '2018-02-05-komodo-native-mode-moving-blockchain-data'],
         ['/blog/2018-02-24-what-is-crypto-where-to-start.markdown.html', '2018-02-24-what-is-crypto-where-to-start'],
         ['/blog/2018-03-13-blockchain-alternatives-tangle-dag-pieces-shit.markdown.html', '2018-03-13-blockchain-alternatives-tangle-dag-pieces-shit'],
         ['/blog/2018-04-02-vuejs-websocket-stuff.markdown.html', '2018-04-02-vuejs-websocket-stuff'],
         ['/blog/2018-04-09-passphrase-password-strength-test.markdown.html', '2018-04-09-passphrase-password-strength-test'],
         ['/blog/2018-04-10-blocnation-digital-payment-solutions-events-beyond.markdown.html', '2018-04-10-blocnation-digital-payment-solutions-events-beyond'],
         ['/blog/2018-04-10-serverless-aws-ses-email-address-policy.markdown.html', '2018-04-10-serverless-aws-ses-email-address-policy'],
         ['/blog/2018-05-10-build-komodo-source.markdown.html', '2018-05-10-build-komodo-source'],
         ['/blog/2018-06-14-dynamodb-to-csv-in-a-couple-of-commands.markdown.html', '2018-06-14-dynamodb-to-csv-in-a-couple-of-commands'],
         ['/blog/2018-06-14-komodo-blockchain-scaling-1-million-tx-per-second-stats-prep-etc.markdown.html', '2018-06-14-komodo-blockchain-scaling-1-million-tx-per-second-stats-prep-etc'],
         ['/blog/2018-07-07-dapps-in-the-d-economy-decentralized-nurses.markdown.html', '2018-07-07-dapps-in-the-d-economy-decentralized-nurses'],
         ['/blog/2018-07-27-blockchain-security-for-dapps-ecosystems.markdown.html', '2018-07-27-blockchain-security-for-dapps-ecosystems'],
         ['/blog/2018-07-30-create-a-blockchain-project-from-zero-to-hero.markdown.html', '2018-07-30-create-a-blockchain-project-from-zero-to-hero'],
         ['/blog/2018-08-22-pre-alpha-komodo-utxo-smart-contracts.markdown.html', '2018-08-22-pre-alpha-komodo-utxo-smart-contracts'],
         ['/blog/2018-08-28-kvm-routed-network-for-new-komodo-feature-testing.markdown.html', '2018-08-28-kvm-routed-network-for-new-komodo-feature-testing']
        ]
      }
    ]
  },
  plugins: [ 'vue-material' ]
}

