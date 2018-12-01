
I'm working on a couple too many scratch projects in 2017 but this is coming in handy as i deal with iframes and [cloud authentication ](https://aws.amazon.com/cognito/), the AWS js load times are poor (on first load) when bundling, an optimisation task next time around.

it led me to search for some stop-gap measures during development.


## #1 vue-loading-screen


First hit was [vue-loading screen](https://github.com/bulv1ne/vue-loading-screen) at github.

![](https://i.mylomylo.com/wp-content/uploads/2017/10/vue-loading-screen-271x300.png)

It's cool for making ajax requests.

    
    vue-init webpack loading #yeah bad name for a scratch project
    cd loading
    npm install
    npm install --save vue-loading-screen
    npm run dev
    
    


Next,


## #2 Toggle Loading Component


Nicely presented at [codepen.](https://codepen.io/sirlancelot/full/NNdyWJ/)

![](https://i.mylomylo.com/wp-content/uploads/2017/10/toggle-component-loading-300x235.png) ![](https://i.mylomylo.com/wp-content/uploads/2017/10/component-loaded-hello-300x235.png)

Then,


## #3 Change iframe content


This was a slight detour, but waiting for npm install i was thinking how to integrate the slow loading into an iframe (as you do), for when the app is framed in another site.

[Finding this on jsfiddle](https://jsfiddle.net/Linusborg/ohznser9/) then opens a fountain of possibilities.  Reminds me of [RSK](http://rsk.co) from an online discussion on chains (shout out to [fish the beach bum investor](https://www.youtube.com/channel/UCXnqmbNNPv69D3GabkkLYlg)), i.e. trying to get two vue apps exchanging data via iframe (like bitcoin to ethereum).  Something for dtt

![](https://i.mylomylo.com/wp-content/uploads/2017/10/iframe-vue-app-comms-300x163.png)


## Summary


That quick 2 minute search, test and peruse yielded this blog post.  Plenty more out there, but it [saves me forking yet another repo](https://github.com/imylomylo) in my github :D
