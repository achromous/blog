---
id: 2
date: 2016-11-29 18:19:00 -5
tags:
- javascript
- angular2
- blog
title: State of the State... or the frontend
---
I based the frontend on the Angular2 Tour of Heroes tutorial that I read
through before starting. I figured if I don't really know what I'm doing it
makes sense to base things on the setup the Angular people put together.

Some of the things I want to address are:

###### Make things look nice
The styling right now is pretty awful. I have learned how to do some flexbox
stuff so I'm going to try getting rid of the framework I am presently using for
CSS and  making things actually look nice.

###### Order posts by date (and display the date)
I did this already actually, go me fixing things faster than bitching about
them.

###### Truncating Posts
Right now all the posts are listed in full. I would like to show abbreviated
versions of the posts prior to the most recent one and then have them expand
or be clicked into, something like that. Will become more of an issue as I write
more posts.

###### A "Contact Me" form
Totally silly, but I want to try out forms with Angular2.

###### Build a tag cloud
I don't really NEED to have a tag cloud, but I want to do something a bit more
complicated than I am now and this seemed like an obvious idea. I'll have a
component that sits on the right hand side of the page listing the totals of
the top 30 or so tags. If you click one of the tags the posts will be filtered
to posts tagged.

###### Search
Search isn't really needed when you have like 2 posts, but it would be
eventually. Doing something with a typeahead will be useful to know.
