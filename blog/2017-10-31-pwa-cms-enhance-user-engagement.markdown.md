
My quick exploration of progressive web apps (PWA), was triggered by the [user engagement stats](https://www.pwastats.com/) from the PWA.

Yesterday I installed the [wordpress progressive web apps plugin](https://wordpress.org/plugins/progressive-web-apps/) by [PWAThemes](https://pwathemes.com/) to see how it ran. I was immediately impressed although the service worker didn't seem to follow instructions (and it was 3am, and this morning at 11am I don't really have time to suss it out)

My friend (who buries his head in the sand for blogging but has github) sent me this [video from the Chrome Dev Summit 2017](https://youtu.be/Di7RvMlk9io).

Same friend votes for pure performance from native apps over hybrid apps.  I'm less pure.  I like the streamlined workflow of getting projects/MVPs/POCs out the door.


## PWA Books & Videos


After my recent joy with the simplicity of PWA and wordpress for off the shelf instant gratification, I checked through the safari bookshelf on what new material there is.  Couple of books:



 	
  * O'Reilly: [Building Progressive Web Apps](https://www.safaribooksonline.com/library/view/building-progressive-web/9781491961643/)

 	
  * Video: [Developing Progressive Web Apps](https://www.safaribooksonline.com/library/view/developing-progressive-web/9781491964217/video255745.html) by Max Firtman

 	
  * [Progressive Web Apps with React](https://www.safaribooksonline.com/library/view/progressive-web-apps/9781788297554/) by Scott Domes


In Max's video, there's a section on starter kits and UI frameworks, which points to [this beauty on github called application-shell](https://github.com/GoogleChromeLabs/application-shell) worth a further look in the near future.


## Bundling With a CMS


The wordpress plugin I'm using seems to have been built with all modern web development tools including angular!  The video linked above makes special mention of server side rendering (SSR), something that PHP does innately as it's a server side programming language.  Vue and React offer SSR, so it will be interesting to see what kinds of integrations are made in the coming 12 months.


## PWA Biggest Limitation


The biggest limitation for the PWA today is that iOS/Safari does not support service workers.  This means your PWA cannot be installed on the device.  This is currently being addressed by Apple.

Other smaller limitations of a PWA compared to a native app are: size of app, access to contact list and a couple of others - but the ability to get push notifications and camera access....gold!

PWAs FTW!
