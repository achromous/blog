---
id: 4
date: 2016-11-29 12:19:00 -5
tags:
- docker
- windows
- blog
title: First Post
---
I have a surface pro 4. I know that if I want to be a proper developer I am
supposed to use a mac or run linux, but dang is the surface nice. However I have
only ever really done any substantial development on unix-based platforms, and
I am not enamored with the idea of spending the time figuring out how to get
everything I need working on Windows (although I am pretty jazzed about reading
this when it comes out https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189
and trying to get more comfortable working on windows) so I went with Docker.
I could have used a VM instead (would have been a lot easier) but I need to
deploy this at some point anyway so a container seemed like a good way to go.
I did consider using rkt but I'm really just not that cool and am more
interested in focusing on learning Angular2 than I am on devops type stuff.

My plan was to have a folder on the host OS (windows 10) with my source in it.
That folder between the host OS and the container. There would be a watch
process running on the container that would reload whatever was needed on edits.
That was the plan heading in anyway.

First bump I ran into was you can't have symlinks from the container to the
host OS. Makes sense as it rather defeats the concept of the a container. Node
modules are installed using symlinks. I took a quick look at seeing if I could
set things up so node installed elsewhere on the system but it didn't seem like
a great idea.

So my next idea was two watch processes setup on the container. The first would
be triggered by changes in the mounted folder and would copy the files in that
folder to another folder. That second folder would have the traditional watch
running in it. This was trickier than I had anticipated as changing a file in
the folder on the host OS does not propagate change notifications to the
container OS. Once I figured this out, I found a watcher that uses polling
(nodemon). I got this working but each file that was copied triggered the
watch task to kickoff so I'd have to wait for a series of restarts. Not ideal.

At this point I popped onto google to see what other people had done. I tried
this at the start as well but not having worked with docker or Angular2 before
I wasn't really sure what I was looking at with a lot of what I found. But after
mucking around with everything for a while I had more of an idea what I needed.
One idea I was thinking about was trying to find settings for the second watch
task that would only trigger one restart even if there were multiple files that
were changed. But I found someone who used docker-compose to mount a folder that
had node modules installed in it but hid that folder from the host OS. This
worked great.

The flaw I have now is that editor shows broken imports for anything that is
installed in the node modules directory. I had a rough time figuring out how to
import a third party library until I decided to install directly on linux to
simplify things for myself a bit. That is what I am presently doing. I would
like to see if I can figure something out to improve the setup I'm using but
I didn't want to invest more time focusing on my setup rather than on Angular2.

I will be back at it soon though because I am going to deploy via containers.
That will be the next step with this.
