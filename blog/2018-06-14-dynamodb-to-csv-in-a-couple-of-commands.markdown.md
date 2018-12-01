
DynamoDB to CSV is not as easy as it sounds - but can be crunched in a couple of commands.  During the [Komodo blockchain scaling](https://i.mylomylo.com/komodo-blockchain-scaling-1-million-tx-per-second-stats-prep-etc/) stuff we're doing, in a simple scaled down run of about 1k tx/s we ended up with 40k items in a DynamoDB table.  To convert to csv, I did these commands using jq

    
    <span class="s1">aws dynamodb scan --table-name kmd-blocknotify-blackjok3r-1-v0 > result.json</span>
    
    <span class="s1"> jq ".Items[] | [ .ac.S, .height.N, .totaltx.N, .size.N, .time.N, .mempoolMB.N, .mempooltx.N] | @csv" result.json<span class="Apple-converted-space">  </span>| sed 's/"//g' | sed 's/\\//g' > result.csv</span>
    
    




Then to sort by a particular column




    
    <span class="s1">cat result.csv | sort --field-separator=',' --key=5 > sorted.csv</span>


Easy to handle in a spreadsheet now :)
