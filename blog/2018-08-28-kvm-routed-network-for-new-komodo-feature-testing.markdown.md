
The new komodo features include [testing Crypto Conditions (UTXO smart contracts)](https://blog.komodoplatform.com/pre-alpha-komodo-utxo-smart-contracts-notes-7c5e8f49206), independent blockchain customization, [a community news site and integrated discourse forum](https://www.reddit.com/r/komodoplatform/comments/87l636/a_new_komodo_news_site_what_do_you_want_to_see/?st=jld426a2&sh=430bc10a), and finally the one that pushed me over the edge to order a new dedicated server....erc20 bridging to komodo.  Between trying to finish a [komodo rpc lib in javascript](https://github.com/imylomylo/komodo-rpc-lib) (first, then maybe go and python) and picking up more docker related workflows to emulate what it would be like for a new dev to use komodo in the quickest amount of time, I feel comfortable having a few more machines - and this is where a KVM routed network gives me full advantage of having 2-10 underutilised virtual machines per dedicated server.  From these virtual machines, running a few docker containers in each virtual machine makes for pretty effective utilisation, although virtualization is not my expertise, a KVM routed network helps me keep tasks and goals fairly independent from each other.




## Background: My First KVM Routed Network


My first KVM routed network configuration was in late 2017 when I was a community member of Komodo.  There was a lot of moving parts and I was new - and as I learned one aspect of Komodo I didn't want it to blow up in my face and stop progress in another part.  I was at a crossroads in my career and not in front of a powerful machine a lot of the time.  I worked at a fantastic organic health food store part-time to make ends meet whilst I delved into blockchain tech.

This is how I came across [some dude's website about KVM configurations](https://jamielinux.com/docs/libvirt-networking-handbook/) - it seemed to be the only site which was clear...on the whole internet!  Hopefully this quick note plus "Jamie's" site make things clearer.  Doing a search for "jamie linux kvm networking" and you see the results.  I visited his notes enough to remember his name :)

![step by step kvm routed network guru](https://i.mylomylo.com/wp-content/uploads/2018/08/jamie-linux-kvm-networking-1024x936.png)


## KVM Routed Network Cheatsheet





 	
  1. ssh to host

 	
  2. become root and create a bridge interface for your public addresses to be advertised on the host and then routed to the guest (if in doubt, refer to Jamie's website for clearer instructions)

 	
  3. download your iso (e.g. ubuntu-16.04-5)

 	
  4. Create the virtual machine and start it with VNC

    
    <span class="s1">virt-install --name erc20bridge --ram 4096 --disk path=/var/lib/libvirt/images/erc20bridge.img,bus=virtio,size=300 --cdrom /opt/ubuntu-16.04.5-server-amd64.iso --network network=default,model=virtio --graphics vnc,listen=0.0.0.0,password=protectme --vcpus 4 --noautoconsole -v</span>




 	
  5. log out OR ssh tunnel your vnc connection

    
    ssh -L5900:localhost:5900 user@kvmhost




 	
  6. Finish the install VNC as if you were in front of the machine
![vnc install ubuntu as kvm guest](https://i.mylomylo.com/wp-content/uploads/2018/08/kvm-vnc-install-ubuntu.png)

 	
  7. 


    After it shuts down, remove the vnc config from your guest configuration.  Firstly dump the definition of your guest, modify the XML definition, then redefine it with the host.  (keep an original file in case of errors).




    
    virsh dumpxml erc20bridge > erc20bridge.orig
    cp erc20bridge.orig erc20bridge
    vi erc20bridge


remove

    
    <span class="s1"><span class="Apple-converted-space">    </span><graphics type='vnc' port='-1' autoport='yes' listen='0.0.0.0'></span>
    <span class="s1"><span class="Apple-converted-space">      </span><listen type='address' address='0.0.0.0'/></span>
    <span class="s1"><span class="Apple-converted-space">    </span></graphics></span>




 	
  8. Whilst we are still editing the machine definition, let's define a new network interface which will have the public ip for our routed network.

    
    <span class="s1"><span class="Apple-converted-space">    </span><interface type='network'></span>
    <span class="s1"><span class="Apple-converted-space">      </span><mac address='This has a mac address, and this type/network xml element already exists'/></span>
    <span class="s1"><span class="Apple-converted-space">      </span><source network='default'/></span>
    <span class="s1"><span class="Apple-converted-space">      </span><model type='virtio'/></span>
    <span class="s1"><span class="Apple-converted-space">      </span><address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/></span>
    <span class="s1"><span class="Apple-converted-space">    </span></interface></span>
    <span class="s1"><span class="Apple-converted-space">    </span><interface type='bridge'></span>
    <span class="s1"><span class="Apple-converted-space">      </span><source bridge='virbr10'/></span>
    <span class="s1"><span class="Apple-converted-space">      </span><target dev='vnetXXX'/></span>
    <span class="s1"><span class="Apple-converted-space">      </span><model type='virtio' /></span>
    <span class="s1"><span class="Apple-converted-space">    </span></interface></span>


vnetXXX on my systems is an odd number.  e.g. vnet1, vnet3, vnet5 because each guest has two interfaces.  The first interface is internal KVM NAT network, the second is the one used for the KVM Routed Network.

 	
  9. You then want to boot up the guest and make sure the NAT network is ok and that if you run ifconfig on the host there are no conflicts and both guest network cards are shown.  vnetX and vnetX+1

 	
  10. ssh to the guest using it's internal address, something like ssh mylo@192.168.122.XXX will get you in.  And then make a definition for the second network card in /etc/network/interfaces

    
    <span class="s1"># The secondary network interface</span>
    <span class="s1">auto ens7</span>
    <span class="s1">iface ens7 inet static</span>
    <span class="s1"><span class="Apple-converted-space">  </span>address <EXTERNAL IP></span>
    <span class="s1"><span class="Apple-converted-space">  </span>netmask 255.255.255.224</span>
    <span class="s1"><span class="Apple-converted-space">  </span>gateway <HOST EXTERNAL IP></span>
    <span class="s1"><span class="Apple-converted-space">  </span>pointtopoint <HOST EXTERNAL IP>
    
    </span>




 	
  11.  Reboot the guest.

 	
  12. On the host, configure the firewall (iptables) and routing (ip r)

    
    <span class="s1">root</span><span class="s2">@</span><span class="s3">host </span><span class="s2">~ </span><span class="s4"># </span><span class="s5">iptables -A FORWARD -d GUEST_EXTERN_IP/32 -o virbr10 -j ACCEPT</span>
    <span class="s1">root</span><span class="s2">@host</span><span class="s3"> </span><span class="s2">~ </span><span class="s4"># </span><span class="s5">iptables -A FORWARD -s GUEST_EXTERN_IP/32 -i virbr10 -j ACCEPT</span>
    <span class="s1">root<span class="s2">@host</span><span class="s3"> </span><span class="s2">~ </span><span class="s4"># </span>ip r add GUEST_EXTERN_IP/32 dev virbr10</span>




 	
  13. To make this routing permanent on the host on reboots, add to the host networking configs (again refer to Jamie's website for details)

    
    <span class="s1">#KVM bridge stuff for custom routed network</span>
    
    <span class="s1">auto virbr10-dummy</span>
    <span class="s1">iface virbr10-dummy inet manual</span>
    <span class="s1"><span class="Apple-converted-space">  </span>pre-up /sbin/ip link add virbr10-dummy type dummy</span>
    <span class="s1"><span class="Apple-converted-space">  </span>up /sbin/ip link set virbr10-dummy address 52:54:00:da:ba:5e</span>
    
    <span class="s1">auto virbr10</span>
    <span class="s1">iface virbr10 inet static</span>
    <span class="s1"><span class="Apple-converted-space">  </span>#make sure bridge-utils is installed!</span>
    <span class="s1"><span class="Apple-converted-space">  </span>bridge_ports virbr10-dummy</span>
    <span class="s1"><span class="Apple-converted-space">  </span>bridge_stp on</span>
    <span class="s1"><span class="Apple-converted-space">  </span>bridge_fd 2</span>
    <span class="s1"><span class="Apple-converted-space">  </span>address HOST_EXTERN_IP</span>
    <span class="s1"><span class="Apple-converted-space">  </span>netmask 255.255.255.224</span>
    <span class="s1"><span class="Apple-converted-space">  </span>up route add -host GUEST_EXTERN_IP_1/32 dev virbr10</span>
    <span class="s1"><span class="Apple-converted-space">  </span>up route add -host GUEST_EXTERN_IP_2/32 dev virbr10
    </span>




 	
  14.  Make your guest come up on host machine reboots

    
    <span class="s1">virsh </span><span class="s2">autostart erc20bridge
    </span>







## Next step, Use existing work in new servers


So once you can ssh to your guest from anywhere in the world, you can start to [build komodo from source](https://i.mylomylo.com/build-komodo-source/) on one machine, use another machine for playing around with [docker images and smart contracts](https://i.mylomylo.com/pre-alpha-komodo-utxo-smart-contracts/) or even running through some [preparation to become a Komodo Notary Node](https://i.mylomylo.com/preparing-komodo-platform-node/) etc.  About as limitless as crypto conditions utxo based smart contracts!

All the best!
