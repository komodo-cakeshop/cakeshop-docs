
Installing Agama FAQs? Didn't look - too bleeding edge perhaps <del>I don't think they exist yet</del> (edit:  I found the Agama [FAQ here](https://support.supernet.org/support/solutions/29000033391)!).  The first question is, where do you get it from?  There are 3 different version (numbers) available to download from public websites - not ideal, but the very friendly developers are within a few minutes of answering questions!

I may have come across a little short in the slack channel, but [opened an issue on github](https://github.com/SuperNETorg/Agama/issues/245), with a quick response that should be known:

The [wallet downloads page](https://komodoplatform.com/en/wallets#_desktop-wallets-multi) has 2 links.  One with the download button, this is the release and usually in sync with the [github release page](https://github.com/SuperNETorg/Agama/releases).  The "release" link is actually a [link to the jenkins build output](https://artifacts.supernet.org/latest/installer_osx.html), so it's bleeding edge.

There was a recent bug, so the release engineering got out of sync.  It happens.

The next question is,


## How do you update Agama?


When you run the installer, select "re-install".


## Do you have to download zcash keys and blockchain again?


No!  The installer never touches the underlying user data.  Komodo blockchain (currently 2.7GB) again?


## Choose Agama Mode & Add Coin Native Mode


Are these the same?  The dropdown menu of the screenshot at the top is a "shortcut to add coins" - so it's essentially the same.  It's probably there whilst the developers are doing their testing, so in the future maybe there'll be a dev-mode flag in the settings or some kind of coin-profile for quick setup.

[![Agama wallet mode and adding coin native mode](https://i.mylomylo.com/wp-content/uploads/2017/12/are-these-the-same-300x269.png)](https://i.mylomylo.com/wp-content/uploads/2017/12/are-these-the-same.png)


## Can you transfer the blockchain to save downloading?


Yes.  Just make sure the komodo daemon is not running then you can copy wallet.dat.  [Backing up on Wallet FAQs](https://support.supernet.org/support/solutions/articles/29000010041-how-to-take-backup-in-the-native-mode), the location of the blockchain varies depending on your platform (win/mac/lin).

The at-home internet here in Sydney is pretty crappy compared to other countries, so this question will have to be updated when I find out...the long download and wait to see what happens way.  It's late and I've got stuff to do in the morning...like watch the alts burn (I was told to sic "stop dreaming" on the komodo slack channel about how alts seem to hold their btc value in satoshis...not that I really care - my holdings are play money for development).


## Initial Conclusion


With little documentation and a lot of options at download and install, (Edit: <del>the user experience sucks!)</del>  it took 10 minutes for the devs to answer some of my annoying questions, but they did and now that I know the answers, user experience judgement is on hold!  These guys are really really good at what they do.  Whatever I'm whinging about right now, they would have fixed before someone really cares to read this.  I know the tech is good from a systems, network protocols and innovation perspective.  The GUI is quite nice to look at as well - but the initial download and install - needs a bit of polishing to get more adoption.  I'm going to plug away at it because....komodo tech is very innovative and very good.
