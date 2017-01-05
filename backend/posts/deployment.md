---
id: 14
date: 2017-01-04 20:33:00 -5
tags:
- CSS
- blog
- AWS
title: Deployment and Other Next Steps
---

If anyone were to actually go to my blog right now they would see "connected
to browser sync" pop up because when I deployed I ran my dev build script
instead of my production build script. Stupid mistakes like this are why err
prone humans shouldn't have direct access to production. So I need to improve
my deployment process. I also have noticed that I'm not terribly inclined to
deploy a new post as soon as it is written. Apparently the overhead of having
to commit to get, ssh to my amazon instance, and run a few commands is enough
to make me bunch updates together.

Unfortunately I don't presently have a great idea of how I'm going to improve
my process, so I'll probably have to do a little thinking/reading. I had
originally intended to build containers locally and then upload them but they
are of such a size that it does not make sense to do so - much faster and less
bandwidth intensive to build them on my EC2 instance. It doesn't feel as nice
to do it this way but it is much more pragmatic. I could have a cron job
running that looks for updates to the repo and automatically deploys them, and
if I don't think of anything better that is probably what I will do.

I looked into RDS and Aurora pricing and I'll be putting another container on
the instance I am running now to host a database instead. It will make things
more straightforward for me from a development perspective as well as I don't
know how you mock out those things locally (although I'm sure methods to do so
are well documented online). Part of me feels a bit silly having three
containers for such a trivial little app, but then again this is supposed to be
for learning and practice - not practicality - or else I'd just have a static
site hosted on S3.

I improved the look of the site. I haven't made it work for mobile yet, and
not having the tags fleshed out is a problem, so I'll be dealing with those
things soon. I will also be fleshing out the backend with a proper api and
a database. I feel like I'll probably get back to some webRTC stuff soon as well
so I should have the next few days worth of dev effort figured out.

I am trying to pull together a bit of a reading list. I am looking for some
books where I won't feel like I need to be writing code as I go to get value
out of them. I do need to finish the google site reliability engineering book
I started a while back, so I might pick that back up. I am somewhat inclined
to do some D3 soon, but I feel like I should accomplish what I had set out to do
with webRTC before I start mucking around with something else.
