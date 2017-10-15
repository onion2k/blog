---
path: "/framework-x-versus-framework-y"
date: "2017-09-01T17:12:33.962Z"
title: "Framework X versus Framework Y"
bg: "linear-gradient(to right, #fffbd5, #b20a2c)"
bgLink: "https://uigradients.com/#Relaxingred"
bgTitle: "Relaxing Red"
bgAuthor: "uiGradients"
tags: "react"
---

There's something that I can't abide in blog posts, and that's *Javascript framework comparisons*. I realise that in the rich pagent of problems the world is facing this is quite minor, but still, it's annoying.

When I see someone has written a new 'comparison' it always seems to end up being essentially the same post everyone else writes. The author will cunningly disguise their wholly partisan opinion by pointing out a few minor flaws with their preferred option, and then proceed to claim those problems are trivial compared to the fundamental show-stopping issues that plague everything other framework. Fortunately for the author this means they should give themselves a huge pat on the back and giant cake for picking the right one. Of course the fact that they've spent two years grinding their way through every consievable problem with the one they like, and only spent half a day reading about each of the others and maybe working through a tutorial to write a To Do list, is hardly the point. The point is that they made the right choice, and of course they got lovely a cake, but it's not very useful for the reader (eg me).

So, to that end, I've set out to write a Javascript framework comparison of my own. The difference is that I'm not *actually* going to compare anything. Instead this article, when it's done, is going to be a canonical list of all the things I like about each different framework I try. Further to that though, no framework is going to be added to the list until I've written at least one reasonably significant application in it. That might be anything, but it has to be more significant than another damn To Do list.

To start I'm going to be writing about React, Vue, and AngularJS 1.6. I've written decent size apps in each of them, with greater or lesser success. I don't have a preference. They're all incredible in their own respective ways.

First, and the framework I've probably spent the most time with, is Angular 1.6. There's a lot to like about Angular. It's *very* well supported which isn't really a surprise considering it comes from Google. The framework itself is nice to work with, and has some really good features like good dependency injection with named operators, services that work brilliantly for abstracting APIs, and interceptors for implenting important features like guards.

The second framework I've worked with, albeit *far* less than Angular, is Vue.JS. Vue is a somewhat different approach to getting an application up and running to Angular - working with it is less like building a monolithic Javascript app and more like working with a decorated HTML page. In many applications that's a terrific bonus; producing a dynamic layout is much easier in Vue than other frameworks. A second feature of Vue that I love is Vuex. It's a state management library that does some things that I really miss working with other frameworks, such as event-driven mutations and (sort of) immutable state variables. Vue's approach to single file components with scoped CSS is really good too.

Last, but by no means least, is React. React feels quite different to both Angular and Vue because it's less like an application framework than Angular, and less like HTML than Vue. React applications feel more like they're composed of lots of small components that work together. I really enjoy working this way. Despite being newer than Angular, React feels like it has a more mature ecosystem of appropriate tools for build modern web applcations and websites. With create-react-app where all the complicated parts are provided for you, it's incredibly easy to get started, but there's also a wealth of *massively* complex plugins and tools that you can use when you need to do things that aren't so straightforward.

Watch this space for posts about each of them, and if you have a recommendation about something to look at after those three drop me a [tweet](https://twitter.com/onion2k) or something.