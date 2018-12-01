
I'm new to komodo and have had the server off for 2 weeks whilst working on other projects. I started komodod and when running the komodod-cli getinfo command receive an error code -28.  Not knowing what it is, I asked on slack:


<blockquote>root@kmd:~/.komodo# /root/komodo/src/komodo-cli getinfo
error code: -28
error message:
Loading block index...</blockquote>


Don't worry that I'm running it as root.  I'm in testing mode.

From the komodo slack group, I was quickly responded to with this helpful tidbit


<blockquote>Now Komodod Instance taking Time To load block index on already downloaded blocks, It will complete In some time, Check for debug.log, where you can find clear info on whats going on....</blockquote>


The debug.log file had this info in it:


<blockquote>

> 
> 2017-11-23 03:45:52 torcontrol thread exit
> 
> 

> 
> 2017-11-23 03:45:53 net thread interrupt
> 
> 

> 
> 2017-11-23 03:45:53 msghand thread interrupt
> 
> 

> 
> 2017-11-23 03:45:53 opencon thread interrupt
> 
> 

> 
> 2017-11-23 03:45:53 addcon thread interrupt
> 
> 

> 
> 2017-11-23 03:45:53 scheduler thread interrupt
> 
> 

> 
> 2017-11-23 03:45:54 Shutdown: In progress...
> 
> 

> 
> 2017-11-23 03:45:54 StopRPC: waiting for async rpc workers to stop
> 
> 

> 
> 2017-11-23 03:45:54 StopNode()
> 
> 

> 
> 2017-11-23 03:45:55 KomodoMiner terminated
> 
> 

> 
> 2017-11-23 03:45:55 KomodoMiner terminated
> 
> 

> 
> 2017-11-23 03:45:56 Shutdown: done
> 
> 

> 
> 2017-12-06 04:46:08 
> 
> 

> 
> 2017-12-06 04:46:08 Zcash version v1.0.8-5aacfee (2017-11-06 13:56:28 +0200)
> 
> 

> 
> 2017-12-06 04:46:08 AppInit2: parameter interaction: -bind set -> setting -listen=1
> 
> 

> 
> 2017-12-06 04:46:08 
> 
> 

> 
> 2017-12-06 04:46:08 Komodo version v1.0.8-5aacfee (2017-11-06 13:56:28 +0200)
> 
> 

> 
> 2017-12-06 04:46:08 Using OpenSSL version OpenSSL 1.1.0d  26 Jan 2017
> 
> 

> 
> 2017-12-06 04:46:08 Using BerkeleyDB version Berkeley DB 6.2.23: (March 28, 2016)
> 
> 

> 
> 2017-12-06 04:46:08 Default data directory /root/.komodo
> 
> 

> 
> 2017-12-06 04:46:08 Using data directory /root/.komodo
> 
> 

> 
> 2017-12-06 04:46:08 Using config file /root/.komodo/komodo.conf
> 
> 

> 
> 2017-12-06 04:46:08 Using at most 125 connections (1024 file descriptors available)
> 
> 

> 
> 2017-12-06 04:46:08 Using 2 threads for script verification
> 
> 

> 
> 2017-12-06 04:46:08 scheduler thread start
> 
> 

> 
> 2017-12-06 04:46:08 Loading verifying key from /root/.zcash-params/sprout-verifying.key
> 
> 

> 
> 2017-12-06 04:46:08 Loaded verifying key in 0.021802s seconds.
> 
> 

> 
> 2017-12-06 04:46:08 WARNING: option -rpcbind was ignored because -rpcallowip was not specified, refusing to allow everyone to connect
> 
> 

> 
> 2017-12-06 04:46:08 HTTP: creating work queue of depth 16
> 
> 

> 
> 2017-12-06 04:46:08 HTTP: starting 4 worker threads
> 
> 

> 
> 2017-12-06 04:46:08 Using wallet wallet.dat
> 
> 

> 
> 2017-12-06 04:46:08 init message: Verifying wallet...
> 
> 

> 
> 2017-12-06 04:46:08 CDBEnv::Open: LogDir=/root/.komodo/database ErrorFile=/root/.komodo/db.log pathIn.(/root/.komodo)
> 
> 

> 
> 2017-12-06 04:46:08 Bound to 127.0.0.1:7770
> 
> 

> 
> 2017-12-06 04:46:08 Cache configuration:
> 
> 

> 
> 2017-12-06 04:46:08 * Using 12.5MiB for block index database
> 
> 

> 
> 2017-12-06 04:46:08 * Using 29.9MiB for chain state database
> 
> 

> 
> 2017-12-06 04:46:08 * Using 57.6MiB for in-memory UTXO set
> 
> 

> 
> 2017-12-06 04:46:08 init message: Loading block index...
> 
> 

> 
> 2017-12-06 04:46:08 Opening LevelDB in /root/.komodo/blocks/index
> 
> 

> 
> 2017-12-06 04:46:09 Opened LevelDB successfully
> 
> 

> 
> 2017-12-06 04:46:09 Opening LevelDB in /root/.komodo/chainstate
> 
> 

> 
> 2017-12-06 04:46:09 Opened LevelDB successfully
> 
> 
</blockquote>


So it's syncing apparently.  See how long it takes!!
