This is how you build Komodo on Ubuntu 16.04
    
    sudo apt-get install build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool ncurses-dev unzip git python zlib1g-dev wget bsdmainutils automake libboost-all-dev libssl-dev libprotobuf-dev protobuf-compiler libqt4-dev libqrencode-dev libdb++-dev ntp ntpdate vim software-properties-common curl libcurl4-gnutls-dev cmake clang screen htop
    
    cd ~
    git clone https://github.com/nanomsg/nanomsg
    cd nanomsg
    cmake . -DNN_TESTS=OFF -DNN_ENABLE_DOC=OFF
    make -j2
    sudo make install
    sudo ldconfig
    
    cd ~
    git clone https://github.com/KomodoPlatform/komodo
    cd komodo
    git checkout dev
    ./zcutil/fetch-params.sh
    (this takes between 5 and 30 mins on a server with fast internet)
    (alternatively if you have done this step on another server you can rsync the files approx 900MB)
    
    ./zcutil/build.sh -j4
    (builds with 4 threads)
    
    echo "rpcpassword=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 17 | head -n 1`">~/.komodo/komodo.conf
    
    cd ~
    cd komodo
    ./src/komodod -daemon &
    ./src/komodo-cli getinfo (after a bit)

If you have a Komodo Paper Wallet or Agama Wallet, you can then issues a ./src/komodo-cli importprivkey \<YOURPRIVKEY\> and use it from cli, integrate server side dApps or some other integrations.


This next pic from John The Cashist

![](https://i.mylomylo.com/wp-content/uploads/2018/05/komodo-merch-john_the_cashist-767x1024.jpg)
