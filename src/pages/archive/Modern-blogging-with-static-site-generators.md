---
path: "/static-site-generators"
date: "2016-06-12T17:12:33.962Z"
title: Modern blogging with static site generators
tags: ""
bg: "linear-gradient(to right, #de6262, #ffb88c)"
bgLink: "https://uigradients.com/#ALostMemory"
bgTitle: "ALostMemory"
bgAuthor: "uiGradients"

---
I haven't bothered to keep track of the number of blogs I've set up for myself, for friends and professionally over the past 20 years. It's certainly a lot. Once, long ago, it was a matter of writing some custom PHP scripts and developing a database. Then came Wordpress and everything was made much, much easier. Once in a while I'd dip a toe in to a different platform, but I always came back to Wordpress. It was streets ahead of everything else for years.

Those days are now gone though. Sad as it seems to be, for a modern blog Wordpress doesn't seem to be the right choice for me any more. That's not to knock Wordpress as a platform for developing websites. It continues to be pretty much the best content management system out there, with loads of great developers making awesome software on top of it. It's just not the right thing to use to make a technical blog.

<aside>![Publishing content is a lot simpler today than it ever has been.](/images/marinoni-printing-press2-1200.jpg)</aside>
There are three requirements for most blogs. If you work collaboratively then there's an additional requirement, but it's optional. They're quite straightforward. This isn't an exhaustive list, but the basics of what's necessary in order to be a blog.

1. The blogging software shall enable a user to create and publish content easily.
1. The blogging software shall give the owner control over how content looks.
1. The blogging software shall display content in a browser, regardless of which browser or device.
1. The blogging software shall enable collaborative writing and editing of content prior to publishing.

Bring these things together means that a blog is a software tool that enables a content creator to put content online for people to read. That's really all there is to it. Blogging is a simple art.

Wordpress definitely appears to meet all these requirements, but in my opinion there's a problem. The key underlying concept that holds all of these requirements together is __content__. Content is the most important part of a blog. It needs to be delivered quickly and maintained easily. Wordpress, however, is not focused on content.

Wordpress is all about code. When a website needs to be dynamic Wordpress makes a developer's life very easy. When a content creator isn't willing or able to use something that requires any level of technical skill to publish something online then Wordpress makes it trivial. That's great, but it's not without it's downsides.

### The cost of using Wordpress.

In it's default setting Wordpress is a server side scripted application that generates a page on each request. There are several layers of caching, but ultimately there's *a lot* going on when you load a page from a Wordpress website. Arguably for most blogs there's far too much. All of the additional work required to connect to a database, manage a user's session, stream assets through filters, observe events, etc means a very basic website needs a server capable of quite considerable computation. Taking my own blog as a reasonably typical example, all it does is stream content directly from disk to a user's connection. There's no complex code. It's easy, which translates to cheap and fast. A server capable of running Wordpress well can be as little as £5 a month, but the cost of running Ooer from Amazon's S3 service is about 1/100th of that. If your blog is suitably popular the cost savings mount up.

There are other advantages of serving static content too. My blog is essentially impossible to hack. It's theoretically possible to break in to my S3 account and make it serve some other content, but there's no way to make it send spam or be part of a DDOS network. These are considerable benefits.

### What to use instead of Wordpress?

Most blogs aren't updated very often, and most don't have any need for user accounts or comments. Fortunately these are the things that make scripting necessary so once you've removed them you're left with some static HTML and CSS content, a little Javascript perhaps and any necessary media assets like images and videos. This is ideal for a static site generator.

A static site generator is an application that takes a set of source files and builds a website from them. Usually the source is in the form of Markdown for posts and pages, and some layout templating files in any one of a number of formats.

### Hexo, a static site generator in Javascript

The code that Ooer runs on is a Javascript static site generator called Hexo. It's similar to the Ruby application Jekyll in that it takes a basic directory of posts written in Markdown and build a static website from them. There's a command line application that's used to add new posts, server the website locally for testing and previewing content, and to deploy the site to S3 (or wherever you chose to host). Everything is managed in a Github repository through git. This is where I feel static site generation has a giant advantage.

Keeping content as part of the code repo means that _no matter what happens_ on your server you're always in a position to do a simple clone->build->deploy procedure to download your blog and it's content and push it up to a live environment again. You can change hosting provider, upgrade, downgrade, completely reset and you're never more than three commands away from having your blog up and running again.

Hexo has three main commands;

```
hexo server
```

The "server" command starts a tiny node.js web server listening on port 4000 and opens a web browser to view the website running on it. This is how you preview the site content.

```
hexo new "The title of a new post"
```

Hexo's new command creates a new markdown file in the _posts directory to be edited in your favourite Markdown editor (or a text editor if you prefer). There's much more to the new command than just creating a post though, you can create a page, or a post with a specific slug, etc.

```
hexo generate --deploy
```

The generate command builds the entire website in the /public directory. Adding the --deploy parameter also runs the deploy process. With this single command you can build the entire site and push it live.

This is the modern, automated, and in my opinion sensible way to run a blog.