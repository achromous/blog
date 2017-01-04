---
id: 11
date: 2017-01-01 10:00:00 -5
tags:
- webRTC
- javascript
- google
title: Last time on The Conor Show
---

I haven't written here in a while (shame on me). I banged through 19 or 20 of
the 30 days of javascript - right up through the one on using your webcam. And
then I went off on a tangent (and am still off on it to a degree) working on
figuring out webcams and webRTC. I thought it would be fairly straightforward
but webRTC is a bit complicated and a lot of the examples I ran across don't
work anymore. I read High Performance Browser Networking as a bit of a
refresher and have been poking away getting something working there. I lost
momentum/interest after a while though and decided to try something else for
a little while.

I triggered google foobar a while back, which is a recruitment tool google has.
If you search for lots of nerdy stuff and happen across the right keywords
they will prompt you with a code challenge. I figured this would be fun to do
and if I managed to make it far enough maybe I'd get a crack at a gig with
Google. So I triggered it again (I remembered the keyword) and started in on it.
The first two exercises were really pretty trivial so it didn't take me long to
get through them. The third one though was something else entirely. It involved
matrix manipulation using standard python libraries (ie no numpy). With some
effort and re-learning (been a long time since I took linear algebra) I
implemented something using a naive recursive algorithm to get the determinant
of a matrix. I thought with the matrix size we were dealing with this would be
good enough but boy was I wrong - it timed out when I tried testing it with
their test cases. So I rewrote the algorithm I was using to be an efficient one
that broke the matrix into lower and upper triangle matrices. This was fast
enough to return in time but this is when I ran into the real issue - I didn't
actually understand the problem. The hardest part in the first two problems
was figuring out exactly what they were asking and what the constraint were.
This particular problem was asking for fractional answers which I misinterpreted
as them suggesting usage of Cramer's rule to solve the matrices, but really
meant they wanted a robust solution capable of non-integer answers. I found
this out after googling around for a solution after I threw in the towel. If
I were more familiar with linear algebra I might have figured it out but when
I was already struggling to remember/relearn that part of it I was too far over
my head. I had fun trying though, and this isn't the first time in recent times
that I've thought that I should get my linear algebra back up to speed so maybe
this will prompt me to do that.

I hadn't looked at my blog in a bit and taking a look at it now really makes me
unhappy with how ugly it is. I was trying to avoid spending a bunch of time on
making it pretty as there are so many things I'd like to be doing with my time
but boy it needs to be at least at a baseline level of pretty so I imagine I
will be dealing with that soon. I am also pretty close (I think anyway) to
having a working two person video conference going using webRTC which I would
then turn into a full site. I have also been thinking about putting together
some containers with starter type projects, like for instance a backend
container that already has node setup with a database, user auth, etc, so that
when I want to start a new project I can have that stuff right from the start.
The best way for me to keep momentum with something is to be making steady
progress, so if I am able to reduce my initial startup effort I will be more
likely to be successful trying to implement a new idea.
