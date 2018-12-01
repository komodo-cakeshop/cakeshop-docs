<template>
  <div>
    <h2>Simple komodod control command wizard</h2>
    <div>
      <input type=textfield name=node1 v-model='node1' placeholder='IP e.g. 192.168.1.100'>
      <br />
      <input type=textfield name=node2 v-model='node2' placeholder='IP e.g. 192.168.1.101'>
      <br />
      <input type=textfield name=ac_name v-model='ac_name' placeholder='Name e.g. TESTCHAIN'> <a :href="link_info_acparam_name">info</a>
      <br />
      <input type=textfield name=ac_supply v-model='ac_supply' placeholder='Supply e.g. 50000'> <a :href="link_info_acparam_supply">info</a>
      <br />
      <input type=textfield name=ac_reward v-model='ac_reward' placeholder='Reward e.g. 256000000'> <a :href="link_info_acparam_reward">info</a>
      <br />
      <input type=textfield name=ac_cc v-model='ac_cc' placeholder='Crypto Conditions e.g. 5'> <a :href="link_info_acparam_cc">info</a>
      <br />
      <input type=button name=clear @click='clearvalues' value='clear' />
    </div>
    <div>
      <pre>
        {{ komododctl_1 }} 
      </pre> 
      Node 1: {{ komododctl_1 }}
      <br />
      Node 2: {{ komododctl_2 }} 
    </div>
  </div>
</template>
<script>
let ac_name_arg = ''
let ac_supply_arg = ''
let ac_reward_arg = ''
let ac_cc_arg = ''
let node1_orig = ' ***NEED node1*** '
let node1_arg = node1_orig
let LINK_ACPARAM_NAME = '/existing/glossary/assetchain-params.rst.txt.html#ac-name'
let LINK_ACPARAM_SUPPLY= '/existing/glossary/assetchain-params.rst.txt.html#ac-supply'
let LINK_ACPARAM_REWARD= '/existing/glossary/assetchain-params.rst.txt.html#ac-reward'
let LINK_ACPARAM_CC= '/existing/glossary/assetchain-params.rst.txt.html#ac-cc'

export default {
  data: function()  {
    return {
      komododctl_1: 'komodod &',
      komododctl_2: 'komodod &',
      ac_name: '',
      ac_supply: '',
      ac_reward: '',
      ac_cc: '',
      node1: '',
      node2: '',
      link_info_acparam_name: LINK_ACPARAM_NAME,
      link_info_acparam_supply: LINK_ACPARAM_SUPPLY,
      link_info_acparam_reward: LINK_ACPARAM_REWARD,
      link_info_acparam_cc: LINK_ACPARAM_CC,

    }
  },
  watch: {
    node1: function() {
        if( this.ac_name.length != 0 ){
          ac_name_arg = ' -ac_name=' + this.ac_name
        }
        if( this.ac_supply.length != 0 ){
          ac_supply_arg = ' -ac_supply=' + this.ac_supply
        }
        if( this.ac_reward.length != 0 ){
          ac_reward_arg = ' -ac_reward=' + this.ac_reward
        }
        if( this.ac_cc.length != 0 ){
          ac_cc_arg = ' -ac_cc=' + this.ac_cc
        }
        node1_arg = ' -addnode=' + this.node1
        if( this.node1.length == 0 ){
          node1_arg= ''
        }
        if( this.node1.length > 0 ){
          node1_arg= ' addnode=' + this.node1
        } else {
          node1_arg = node1_orig
        }
        if( this.ac_name.length > 0 && this.ac_supply > 0  ){
          this.komododctl_1 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + ' &'
          this.komododctl_2 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + node1_arg + ' &'
        } else {
          this.komododctl_1 = 'komodod &'
          this.komododctl_2 = 'komodod &'
        }
    },
    ac_name: function() {
        if( this.ac_supply.length != 0 ){
          ac_supply_arg = ' -ac_supply=' + this.ac_supply
        }
        if( this.ac_reward.length != 0 ){
          ac_reward_arg = ' -ac_reward=' + this.ac_reward
        }
        if( this.ac_cc.length != 0 ){
          ac_cc_arg = ' -ac_cc=' + this.ac_cc
        }
        ac_name_arg = ' -ac_name=' + this.ac_name 
        if( this.ac_name.length == 0 ){
          ac_name_arg= ''
        }
        if( this.node1.length > 0 ){
          node1_arg= ' addnode=' + this.node1
        }
        if( this.ac_name.length > 0 && this.ac_supply > 0  ){
          this.komododctl_1 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + ' &'
          this.komododctl_2 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + node1_arg + ' &'
        } else {
          this.komododctl_1 = 'komodod &'
          this.komododctl_2 = 'komodod &'
        }
    },
    ac_supply: function() {
        if( this.ac_name.length != 0 ){
          ac_name_arg = ' -ac_name=' + this.ac_name
        }
        if( this.ac_reward.length != 0 ){
          ac_reward_arg = ' -ac_reward=' + this.ac_reward
        }
        if( this.ac_cc.length != 0 ){
          ac_cc_arg = ' -ac_cc=' + this.ac_cc
        }
        ac_supply_arg = ' -ac_supply=' + this.ac_supply
        if( this.ac_supply.length == 0 ){
          ac_supply_arg= ''
        }
        if( this.node1.length > 0 ){
          node1_arg= ' addnode=' + this.node1
        }
        if( this.ac_name.length > 0 && this.ac_supply > 0  ){
          this.komododctl_1 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + ' &'
          this.komododctl_2 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + node1_arg + ' &'
        } else {
          this.komododctl_1 = 'komodod &'
          this.komododctl_2 = 'komodod &'
        }
    },
    ac_reward: function() {
        if( this.ac_name.length != 0 ){
          ac_name_arg = ' -ac_name=' + this.ac_name
        }
        if( this.ac_supply.length != 0 ){
          ac_supply_arg = ' -ac_supply=' + this.ac_supply
        }
        if( this.ac_cc.length != 0 ){
          ac_cc_arg = ' -ac_cc=' + this.ac_cc
        }
        ac_reward_arg = ' -ac_reward=' + this.ac_reward
        if( this.ac_reward.length == 0 ){
          ac_reward_arg = ''
        }
        if( this.node1.length > 0 ){
          node1_arg= ' addnode=' + this.node1
        }
        if( this.ac_name.length > 0 && this.ac_supply > 0  ){
          this.komododctl_1 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + ' &'
          this.komododctl_2 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + node1_arg + ' &'
        } else {
          this.komododctl_1 = 'komodod &'
          this.komododctl_2 = 'komodod &'
        }
    },
    ac_cc: function() {
        if( this.ac_name.length != 0 ){
          ac_name_arg = ' -ac_name=' + this.ac_name
        }
        if( this.ac_supply.length != 0 ){
          ac_supply_arg = ' -ac_supply=' + this.ac_supply
        }
        if( this.ac_reward.length != 0 ){
          ac_reward_arg = ' -ac_reward=' + this.ac_reward
        }
        ac_cc_arg = ' -ac_cc=' + this.ac_cc
        if( this.ac_cc.length == 0 ){
          ac_cc_arg = ''
        }
        if( this.node1.length > 0 ){
          node1_arg= ' addnode=' + this.node1
        }
        if( this.ac_name.length > 0 && this.ac_supply > 0  ){
          this.komododctl_1 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + ' &'
          this.komododctl_2 = 'komodod' + ac_name_arg + ac_supply_arg + ac_reward_arg + ac_cc_arg + node1_arg + ' &'
        } else {
          this.komododctl_1 = 'komodod &'
          this.komododctl_2 = 'komodod &'
        }
    }
  },
  methods: {
    clearvalues: function() {
      this.node1 = ' *** NEED node 1 ***'
      this.node2 = ''
      this.ac_name = ''
      this.ac_supply = ''
      this.ac_reward = ''
      this.ac_cc = ''
      this.node1_arg = this.node1_orig
    }
  }
}
</script>
