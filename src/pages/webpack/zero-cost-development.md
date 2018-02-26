---
path: "/zero-cost-development"
date: "2018-02-26T19:31:00.000Z"
title: "Zero Cost Development"
bg: "linear-gradient(to right, #ffd89b, #19547b)"
bgLink: "https://uigradients.com/#Dusk"
bgTitle: "Dusk"
bgAuthor: "uiGradients"
tags: "web development"
---

Recently my Mac blew up. Only figuratively speaking, but it was enough of a problem that it’s dead and not coming back. Consequently I’ve abandoned writing software on a local machine for the time being, at least until Apple update the Macbook Pro, and then only depending on whether a new one is worthwhile.

Until then I’m experimenting with “zero cost development”. What that entails is essentially writing code without spending a dime on any tools, infrastructure, or services. It’s free tiers _almost_ all the way down. I’m going to cheat a little bit. For starters, I’ve already got a Chromebook. It’s a very basic Chromebook (2GB RAM, 1.6GHz Celeron, 11” screen). It was about 1/10th the cost of a Macbook at £170, which is awesome, but that’s clearly not even close to being free. I can’t quite figure out how I’d write code without a computer though so nevermind. Also I already have a domain. I’ve owned it for years but if you don’t have one then you can’t really put things online in a sensible way, so that’s about £10 you’ll have to spend.

Fortunately that’s where the spending ends.

I’m lucky enough to write code using tools and languages that are all open source, free, and _really_ nice to use. Most of what I write is JavaScript. It’s all built using Webpack. There’s testing with Mocha, Chai, Jest, etc. There’s linting with eslint. There’s a bunch of other things in there as well depending on the project. It all works nicely.

I store the source for everything in a free github.com account. Github is fantastic. While I realise that it won’t suit everyone I stick with a free account because I strongly believe in coding in the open. People can look at my projects, copy them, improve them, and generally do what they want with them. I write code because I enjoy writing it; if other people can make something of what I enjoyed writing then all the better.

When it comes to putting things online I use Netlify. This blog post is on a Netlify server. Netlify is free for small, basic things and it works *damn* well. I can push code to Github and Netlify will pull it to their servers, build it, and host it. Set up was a breeze, and it’s never been down as long as I’ve been using it.

Lastly, and this one largely is new to me so it may change, there’s Codenvy. It’s a Dockerised web server integrated with Eclipse Che (a browser based IDE). After a few hours of tinkering with it I’m very impressed, so it’s going to be my go to dev environment for a while. Watch this space.

All this goes to show that you can write software, in some reasonably competent manner, without needing to spend thousands on hardware and software tools.

Maybe I won’t need to buy a new Mac after all. But then again, maybe I will. Because they’re shiny.
