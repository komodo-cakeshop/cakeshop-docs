
After my [first install off Agama](https://i.mylomylo.com/agama-wallet-app-first-install/), I fiddled around and decided to delete KMD in [SPV Mode](https://bitcoin.org/en/glossary/simplified-payment-verification), it wasn't really what I wanted.  Komodo Native Mode is the full blockchain experience, total unmitigated and righteous sovereignty.  You can do sensible things like, backup the wallet.dat - especially after sending/receiving transactions!

[![Select Komodo Native Mode](https://i.mylomylo.com/wp-content/uploads/2017/12/add-kmd-native-mode-1024x671.png)](https://i.mylomylo.com/wp-content/uploads/2017/12/add-kmd-native-mode.png)The komodod (komodo daemon) is going to run in the background.  Click 'Activate Coin' and you should be up and running...

But first the zcash params need to be downloaded.  I spent 10 minutes reading various [zcash concepts](https://github.com/zcash/zcash/wiki/Concepts-in-Zcash) and key burning ceremonies on the internet.  In short they are 900MB.  If you've downloaded it once, then just copy the relevant folder onto a usb drive and move them to another computer.

Otherwise you get this nice screen where the red flag at the bottom says zcash params are missing.  So, you download 900MB of keys.

[![Zcash Params Missing](https://i.mylomylo.com/wp-content/uploads/2017/12/zcash-params-are-missing-1024x671.png)](https://i.mylomylo.com/wp-content/uploads/2017/12/zcash-params-are-missing.png)

It downloads zcash-params and you just wait for it to do it's thing.  There's no putting it into the background, just have to wait.  So you're better off moving it from another machine to save you a lot of time.  On the different platforms, the zcash params are stored:




<blockquote>Linux: ~/.zcash-params

Windows:

Mac:</blockquote>




Then you're up to blockchain sync.  Let it start so you know where to put your blockchain data on the new machine - only takes 10 seconds or so.

[![Komodo Native Mode Blockchain Sync](https://i.mylomylo.com/wp-content/uploads/2017/12/komodo-native-mode-syncing-1024x719.png)](https://i.mylomylo.com/wp-content/uploads/2017/12/komodo-native-mode-syncing.png)

After quitting agama, move the chainstate and blocks directories from a closed agama instance that is synced.  You'll find the location around your wallet.dat file


<blockquote>Linux: ~/.komodo/wallet.dat
MacOS: ~/Library/Applications Support/Komodo/wallet.dat
Windows: %AppData%/Komodo/wallet.dat</blockquote>


On your new machine, copy the folder chainstate and blocks directories to the above locations.  Then start agama.  It will rescan the blocks and activate best chain in an hour or so compared to a full off-the-net resync.
