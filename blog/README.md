```
 748  git clone https://github.com/thomasf/exitwp.git
  749  cd exitwp/
  750  ls
  751  sudo pip3 install --upgrade -r pip_requirements.txt
  752  python -v
  753  cd blog
  754  ls
  755  vi 2017-12-11-copying-blockchain-data-komodo-agama-wallet.markdown.md 
  756  vi 2018-08-22-pre-alpha-komodo-utxo-smart-contracts.markdown.md
  757  vi 2018-07-07-dapps-in-the-d-economy-decentralized-nurses.markdown.md
  758  cd ..
  759  cd .vuepress/
  760  vi config.js 
  761  cd ../blog/
  762  ls
  763  vi config
  764  cat config 
  765  for i in *; do echo $i;done
  766  for i in *; do cat config | sed 's/XXXXX/$i/g ;done
  767  for i in *; do cat config | sed 's/XXXXX/$i/g' ;done
  768  for i in *; do cat config | sed 's/XXXXX/\$i/g' ;done
  769  for i in *; do cat config | sed 's/XXXXX/${i}/g' ;done
  770  for i in *; do cat config | sed 's/XXXXX/\${i}/g' ;done
  771  for i in *; do cat config | sed 's/XXXXX/\\${i}/g' ;done
  772  for i in *; do cat config | sed 's/XXXXX/\$${i}/g' ;done
  773  for i in *; do cat config | sed 's/XXXXX/$${i}/g' ;done
  774  for i in *; do cat config | sed "s/XXXXX/$${i}/g" ;done
  775  for i in *; do cat config | sed "s/XXXXX/${i}/g" ;done
  776  for i in *; do echo $i | sed s/md//g | cat config | sed "s/XXXXX/${i}/g" ;done
  777  for i in *; do echo $i | sed s/md//g ;done
  778  for i in *; do cat config | sed "s/XXXXX/${i}/g" ;done
  779  for i in *; do cat config | sed "s/XXXXX/${i}/g" >> list ;done
  780  vi list 
  781  cd ../.vuepress/
  782  ls
  783  vi config.js 
  784  cat ../blog/list 
  785  vi config.js 
  786  cd ..
  787  cd blog/
  788  ls
  789  vi 2017-12-23-accessing-xvg-project-verge-community.markdown.md 
  790  ed '0,/^bin$/d'
  791  grep "---" *
  792  ls
  793  grep "\-\-\-" *
  794  for i in *.md ; do sed '0,/^\-\-\-$/d' $i ;done
  795  for i in *.md ; do sed -i '0,/^\-\-\-$/d' $i ;done
  796  grep "\-\-\-" *
  797  for i in *.md ; do sed -i '0,/^\-\-\-$/d' $i ;done
  798  grep "\-\-\-" *
  799  vi 2017-12-21-update-agama-wallet-uninstall-reinstall.markdown.md 
  800  vi 2017-11-10-serverless-deploy-aws-simple-naming-convention.markdown.md
  801  vi 2018-05-10-build-komodo-source.markdown.md 
  802  vi 2018-07-07-dapps-in-the-d-economy-decentralized-nurses.markdown.md 
  803  ls
  804  vi 2017-10-30-building-ripple-servers.markdown.md 
  805  vi 2017-12-11-copying-blockchain-data-komodo-agama-wallet.markdown.md 
  806  history
```
