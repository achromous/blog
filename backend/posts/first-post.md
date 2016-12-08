---
id: 1
date: 2016-11-29 12:19:00 -5
tags:
- javascript
- angular2
- blog
title: First Post
---

#### What is this and why did I make it

I made this blog for two reasons:

The first is that I really could use a place to write things down. My written
communication (while still good) is not what it once was. I am out of practice
and this will give me a good way to fix that. Writing things down also helps
with future remembrance as well as just organizing yourself better in the first
place.

The second is that I want to learn Angular2. I am contemplating switching back
from product management to development and spending time getting my skills up
helps make that possible as well as giving me the experience of what it will be
like deep in the code mines again. There is no technical reason this should have
been done in Angular2. This SHOULD have been done as a very simple static site,
or maybe a frozen-flask type blog at best. This is total overkill but it gave me
something simple to cut my teeth with using Angular2. It also provides something
of a very poor portfolio if I start applying for dev jobs.

#### Details

I have done enough work on this blog to do a first commit. I probably should
have done so before now - I reworked how the post service worked yesterday to
use metadata and while it went fine doing things like that without a backup is
never wise. I still have a few things I need to handle before I actually check
in such as:
* Writing up an initial few posts (I have been testing with a few stand ins but I
  don't want to check those in). I'm going to write
    * This one
    * A post on the frontend
    * A post on the backend
    * A post on the overall infrastructure
  I really don't need to be that granular but it'll give me a few posts to
  start playing with additional features I'm going to be adding.
* Fixing my about me to not be awful
* Writing a readme
* Whipping up a gitignore (pretty trivial but still need to do it)

Future things (near term) I want to do are:

#### Deployment to AWS
A blog isn't terribly useful if no one sees it. I am going to deploy using EC2
container service. I have already have the frontend running in docker, although
I need to get it setup using nginx instead of the dev server (I had this going
  earlier) so it should be pretty trivial. I still need to dockerize the
backend, but that shouldn't be difficult either. Never used EC2 container
service but I don't anticipate any real issues. I would like to be able to
deploy by running a command from terminal, but won't go that far if it ends up
being complicated - the goal right now isn't to go off the deep end with the
devops.

#### Style everything
I've done very very minimal and crappy styling thus far. I'm going to be putting
this on achromo.us and achromous means without color so I'll be sticking with
greys. I don't want to spend too much time mucking with this though.

#### Add filtering for posts based on tags
I added tags already so that I can add filtering based on tags. What I've put
together so far is really very basic, so I want to add more functionality to
practice more aspects of Angular2. Tags, searching, things like that will be
good for practice.

There are more specific things as well that I'll write up in the additional
posts I am making for each section.
