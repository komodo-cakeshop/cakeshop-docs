
The tl;dr; version of this cPanel vs Plesk winner is, **Plesk**.  I have no affiliation (but I'm going to send them this blog), just a happy convert to easy wordpress site management.  I had been running Plesk for 6 months before trying cPanel but my first hour of using both packages was a good tell.


## What I tested and why and a bit of background


Looking for a reliable way to quickly install and [turnaround website development with wordpress](https://turnaroundwebsites.com):



 	
  * Easy to allow access to a junior to do the work

 	
  * Easy to allow customers to jump in and manage their own installation

 	
  * Easy to clone/sync sites from dev to staging to production

 	
  * Time saving


I have been a command line developer and system administrator since 1999 for my own projects and was involved with setting up a national VoIP network with up to 20 points of presence at it's peak during the early adopter phase of VoIP.

But [in 2016 I started a new business](https://businessapps.com.au) because [front end frameworks were once again sexy](https://vuejs.org) in my eyes, [serverless computing was starting to mature](https://serverless.com) which reduced the maintenance of servers to zero.


## Plesk


I started using Plesk because of their [AWS EC2 promotional credits](https://www.plesk.com/infrastructure-providers/hyperscalers/aws/promo/).  It was a quick and easy way to try it during their 14 day free trial and the monthly cost was alluring at first and it just got better immediately when I could fire up wordpress in under a minute.

![cPanel vs Plesk Allure - AWS Promotional Credits with Plesk](https://i.mylomylo.com/wp-content/uploads/2017/11/plesk-aws-credits.png)

Plesk provides it's own package for Wordpress installation called [Wordpress Toolkit](https://www.plesk.com/extensions/wordpress-toolkit/).


## cPanel


It was 6 months after using Plesk that I thought I should give the main competitor a try.  The cPanel and WHMCS combination for complete customer management and invoicing was still alluring, but I had been looking at [blesta for billing](https://blesta.com).  I decided on using [WootHosting](https://woothosting.com) for the experience.  Their support is very quick to respond to tickets.

cPanel by default relies on softaculous for installing wordpress.  It's kind of dated.  Nothing wrong with a few questions in a form, but it's nearing 2018 and it's ugly.  My reseller/customer accounts expect something nice - I produce nice things or engage with [very talented designers](https://james.earnshaw.com) and [photographers](https://www.anglejunglephotography.com/) and an ugly form would be a poor reflection of the work we are capable of!


## WordPress, Let's Encrypt & https redirection


This is where the **cPanel vs Plesk comparison ends**...badly for cPanel.  I decided I needed to make a blockchain tech blog for a friend of mine who was getting into the cryptoeconomy.  I am refraining from using bad language, but OMG (not the [Asian blockchain payment solution from Omise](https://omisego.network/)) this is where cPanel failed.  The things that went wrong were:



 	
  * WordPress was installed in the wrong directory (the ugly softaculous form) said it was going to install WordPress where it did, but it was so easy to gloss over, that I glossed over it into the wrong default directory

 	
  * the default admin user for the wordpress installation is _admin_.  Makes it even easier for script kiddies to hack.  Plesk creates a user based off the logged in plesk admin with an underscore and several random characters....e.g. imylomylo_8973na8z, hard for me to remember, but I can create another admin user easily later.  Also Plesk's WordPress Toolkit allows for excellent (but not perfect) management of the site.

 	
  * email address of the site admin can be set at install, but it assumes that I've already created the email address in cPanel, Plesk on the other hand defaults to the admin's email address who is installing it.  Depends on your workflow I guess, but it's got such good management tools that within a click or two it's changeable once installed.

 	
  * After installing the Let's Encrypt certificate, I went to setup a redirect and this is the last straw in the cPanel vs Plesk comparison.  It breaks the site.  I'm already sold on Plesk but if we're breaking simple redirects - whether I'm a new cPanel user or an experience command line cowboy, I don't think being able to break a website first go should really be an option - not heading into 2018 when there's clever devops technologies that are even making system administration a dying trade.




## cPanel vs Plesk Costs


Plesk has 3 different versions, a web host version which I use on AWS enabling resellers to manage their own ways of selling.  I have no resellers, but it's nice to have the option for an extra $5/month.

I use the Web Pro version on a [virtualised server running on a dedicated server in Germany](https://i.mylomylo.com/site-info/)...for testing.  It allows for 30 domains and it costs around $10/month.

Seriously, it saves me so much time to use Plesk.

cPanel costs - well they were included in the package I got from WootHosting.  Awesome!  Except it's a sucky offering compared to the competition.

cPanel vs Plesk in 2018 - definitely Plesk.
