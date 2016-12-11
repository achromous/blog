---
id: 5
date: 2016-12-9 10:57:00 -5
tags:
- docker
- aws
- blog
- nginx
title: Kicking this blog on out the door
---

I am currently working on getting this thing up. I'm cutting out steps I had
intended to take as I go for the sake of expediency. I needed to first dockerize
the backend. I tried doing this on my desktop which is running windows but ran
into some issues with the blog container running correctly. In order to
eliminate variables I went back to the ubnutu system I had been developing on,
installed docker (more of a pain than I would have assumed), and got things
working there. Containerizing the backend was
pretty straightforward, as was adding it to the docker-compose definition file.
I checked that in and tried it on windows - and windows still doesn't work. I
believe it is because I am referencing localhost in my call to the backend and
localhost doesn't resolve to the container on windows but does on linux. But
whatever the reason is I am going to deal with that at a later date as it does
not impact me shipping the blog.

The next thing I needed to do was make a production version of the frontend. The
backend doesn't need anything in it changed (that I can think of now anyway) but
the frontend is using a dev server. I had things working with nginx earlier in
the process from when I was trying to figure out how to make things work on
windows so it wasn't that difficult to get it going. I now can run
docker-compose specifying docker-compose.prod.yml and the blog will come up
with nginx as the server. I did notice that I have route issues, if you try to
do directly to localhost/blog this is not correctly handled at present, but I am
going to deal with this later.

I was going to use amazon EC2 container service but it seems overly complicated
for right now. I will better automate things eventually but right now manually
moving this up is fine. I have some other stuff I want to work on both with this
and other projects so as long as I document the steps so I won't screw it up
again in the future then I can call this done for now. The goal is to have both
containers running on an EC2 instance by whatever method is easiest. I am
guessing that will probably look like spinning up an ubuntu instance, loggin in,
manually configuring it to have whatever I need (docker, node, etc), cloning
the project on there, and building it that way. I would rather be able to just
move the containers from my system onto that system but if that takes me long
to figure out then I will just go with the one I know.

Okay so I figured that out easily enough but it was going to take ages to scp
them up from my machine so instead I'm pulling the source down and building
the images on my instance. However I'm now running into the same/very similar
issue to what I was seeing when I was trying to run this on windows, so looks
like I'm going to have to figure that out.
`Error: (SystemJS) XHR error (403 Forbidden) loading http://ec2-54-89-220-64.compute-1.amazonaws.com/app`
I figured out this was caused by a really stupid error - I had setup my gitignore
to ignore all javascript files so that it would not check in the compiled
typescript, however I incorrectly wrote the rule so it occluded this file
as well. It worked on my linux box because the file was already there. Once
I looked at iptables and saw that they were exactly the same on the amazon
instance and on the local machine I happened to notice the file itself was
actually missing. This is EXACTLY the kind of issue a dev workflow with docker
is supposed to help fix so serves me right for doing some work on bare metal.

Next minor issue I ran into was I never compiled the typescript, but that was
easily fixed by calling tsc by hand. I am going to need a proper deploy
at some point soonish but I don't want to get webpack working yet.

The final issue was that the blog container's request to the api container
wasn't working. For whatever reason this worked on my local machine but it
wasn't working on the amazon instance, despite both being ubuntu. I have added
the containers to the same network, and now I can curl from the blog to the api
and get results, but for whatever reason the service in ng2 is still failing.
Turned out to be a CORS issue (yay). I was manually setting some things in
express for CORS so I installed some middleware to do it instead and that
worked. I am finishing this post and then will manually deploy on AWS.

And voila - my terrible blog is live. Manually doing anything on prod is really
gross, but then again - this isn't exactly that important of an application. I
WILL have a completely automated deployment process at some point though. I also
would like to address some testing - right now there is none and that will blow
up in my face at some point soon I am sure. I prefer working with TDD but I
don't know how to do that with this tech yet. (I could do it on the API but as
the API is presently pretty crappy I'd rather do that when I rewrite it.)
