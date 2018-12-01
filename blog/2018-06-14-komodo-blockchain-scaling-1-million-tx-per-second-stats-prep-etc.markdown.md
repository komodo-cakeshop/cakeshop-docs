
Komodo blockchain scaling is a load test requiring a lot of resources, preparation, co-ordination and then statistics.  Any load test does.  My days at [Omnium World](http://omniumworld.com/) were about seeing how many users could upload their portfolio work to our servers.  My days using [asterisk](https://asterisk.org) and doing the occasional load tests for carriers to see how many concurrent calls their networks could handle.

We are using AWS for infrastructure - EC2, DynamoDB, S3, ECS and maybe another service or two.

[![Komodo AWS Blockchain Scaling](https://i.mylomylo.com/wp-content/uploads/2018/06/Komodo-Scalability-Solutions-Architecture-1024x613.png)](https://i.mylomylo.com/wp-content/uploads/2018/06/Komodo-Scalability-Solutions-Architecture.png)

Notary node operator [blackjok3r](https://github.com/blackjok3rtt/) from the [a-team](https://github.com/KomodoPlatform/NotaryNodes/tree/master/proposals/a-team) has built a docker image (with help from [NN operator patchkez of dragonriders](https://github.com/KomodoPlatform/NotaryNodes/tree/master/proposals/patchkez)) for us to scale.  Testing with 64 chains, we created a [start parameter](https://github.com/imylomylo/komodo-aws-blast-control) using the serverless framework for a simple URL to poll to trigger the transaction blasters.

As the blasting of transaction happens across the chains, we use the blocknotify event to send the latest block info.  It is captured using [AWS API Gateway ->Lambda -> DynamoDB](https://github.com/imylomylo/scaletest-blocknotify).  Another serverless framework thing to speed us along.

We're now at a stage of tuning to maximise the transactions per second, but more importantly - have statistics available for the public to view in realtime (or close to realtime) on our efforts.  Something like this is being prepared.

[![Blockchain stats](https://i.mylomylo.com/wp-content/uploads/2018/06/crypto-cartography-1024x942.png)](https://i.mylomylo.com/wp-content/uploads/2018/06/crypto-cartography.png)

Massaging [sample data](https://s3-ap-southeast-2.amazonaws.com/kmd-scaling/sorted.csv) for smk782's stats site, [cryptocartography.io](http://cryptocartography.io/) is the work for the next day.

Stay tuned for more updates :D

Checkout [Komodo Pioneers](https://komodopioneers.com) while you're here!


