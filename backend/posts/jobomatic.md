---
id: 9
date: 2016-12-14 8:16:00 -5
tags:
- javascript
- docker
- jobomatic
title: Jobomatic 9000
---
Anyone who has applied to jobs is very likely to tell you that doing so is very
dull. You are tasked with doing the same repetitive thing again and again. But I
have just the thing for repetitive boring tasks - programming them into
oblivion!

It shouldn't be very difficult to automate pieces of the job search process.
Scraping various job sources for results would be pretty straight forward. I can
prepare myself a nice list of new results to look at each day from the various
sources I've found. That would be one task to undertake. I have used phantomjs
a good deal to borrow data from various places on the internet before so this
should be pretty easy for me to do.

Another would be emailing my resume in once I've found a potential gig. I could
start by creating a program that would take a list of email addresses and fire
off a nice email with my resume attached to all of those. I played around with
sending email using my gmail account from a python notebook the other night so
this will be pretty easy to do as well.

Those are the two areas I am going to start, the ends really. Once I bang those
out I will be in the middle processing the results of my scraping and building
lists of email addresses to send resumes to. At that point I will then automate
that specific instance, which will still leave the many many times when you are
required to fill out a form on a website, but it would get me some return at
that point. I am thinking about then trying to tackle specific popular intake
sites such as greenhouse.io. There are probably a subset of companies using that
where the default questions have been selected so if I write something to answer
the default questions I would be able to handle those. But this is all down the
road - step one is writing a scraper.

My plan at this point is to build something that will take an array of CSS
selectors and will save them to JSON for a particular URL. Ideally I would save
the entire webpage I am scraping so that if I want to reprocess them later due
to bugs in the initial processing, additional features, whatever - I can do so.
However I am only really interested in the content of the pages - I don't need
the styling, the nav elements, ads, javascript, and so on. And this all takes
up hard drive space that I don't have in spades - my surface pro 4 while awesome
only has 256 gigs. So building a json file that contains the URL, the date the
information was downloaded, and the results of the various selectors would help
cut down on size a good deal. Having the results in a json file with the
additional metadata such as URL and date will also help with management in the
long run. I have put that in the filename before but this seems like it will be
easier to work with.

I am planning on having this take a URL and a targets (a file defining what
selectors to use) file from the command line. This would allow me to have a
command system that would bring up containers as needed to fetch data. I am not
sure at this point where I would handle storing the data, or handling multiple
URLs (seems wasteful to teardown a container after just one GET) but I am not
really trying to solve that problem now - I just have it in the back of my mind
while I'm trying to solve this one and figure this will put me in decent
position to deal with that at a later time. Because who wouldn't want a fleet
of containers in azure scraping the hell out of amazon? I mean other than amazon
who obviously wouldn't want that. Spoilsports.
