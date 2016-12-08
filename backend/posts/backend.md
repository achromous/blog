---
id: 3
date: 2016-11-29 12:19:00 -5
tags:
- javascript
- node
- blog
title: Backend
---
I wanted to focus on the frontend rather than the backend. But I did want to
be developing for when I had one. I considered trying to mock one out but using
express is so trivial that it was easier to build the real thing. I didn't want
to deal with a database or anything like that yet though so I decided to use
files with some yaml metadata. This will be perfectly serviceable until I have
a decent amount of posts up so it seems like a decent simplification for now.
Nothing really that complicated about a database but it is extra work that isn't
needed right now.

I am using a library that converts the yaml to json. I'm presently sending back
an array of all the posts as json. There is no proper URL structure. I am not
going to go to far before fixing that. The encapsulation on the other end means
this will only really muck up the posts service. I am going to setup a RESTful
API that allow for filtering, getting individual posts, and so on. I will also
change the backend to check for new posts. At present it loads the posts in
on startup so new posts would never show up. This might not be a massive issue
depending on how I end up setting up my deployment scripts but seems like a
fairly reasonable improvement.

Longer term I'd like to move the backend from javascript to elixir, but not
until I'm solid with Angular2.
