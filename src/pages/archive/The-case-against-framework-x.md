---
path: "/framework-x"
date: "2014-03-12T17:12:33.962Z"
title: UNFINISHED The Case Against Framework X
tags: ""
---
It's not hard to find opinionated articles and blog posts that argue in favour of or against a particular choice of framework. Sometimes they detail why a framework goes against the 'proper' way to code something, sometimes they're 'benchmarks' that helpfully tell you why a library is too slow for production use, and sometimes they're just an angry diatribe against something that a developer hasn't been able to use.

Mostly it's that last one.

Developers sometimes mistake an argument a particular framework as an argument against frameworks in general - the number of front end web developer articles that state jQuery is unnecessary in the face of vanilla JS, or that ES2015 will replace the need for underscore.js shows at least some belief that frameworkless code can be a good thing. Further to that, there are myriad blog posts that say angularJS is too slow, or that ember.js is too heavy for production, or backboneJS is unmanagable in a large application. It's easy to think the weight of all that content should push you towards starting from scratch and building something of your own. After all, you've been coding for years and you're good at this stuff, right? Can't you do something that, while maybe not as flexible, is actually good enough for the jobs you have?

So why not write your own framework?

<aside>![It's important to consider which drum you beat.](/images/night-parade-1200.jpg)</aside>

The first thing to consider is that there's a damn good reason to write your own code every single time, and no discussion of libraries and frameworks will ever change that: __writing something in order to learn stuff.__

If your aim is to write better code then building something that abstracts the what's needed in to a pure, generic, applicable-to-whatever library is a fantastic approach to figuring out what's really important. That is a good thing, and everyone should try to do it.

The thing to remember though, is that even if your framework is a work of pure unadulterated genius, it's still not as good as a popular mainstream project like Bootstrap or Angular.

So what's wrong with your code?

### Noone else knows it.

No matter what you manage to create, from the most perfect work of abstract framework genius down to a basic PHP script you can include to define a few functions, you should aim to write code that's useful to other people. If you're working on a project that only you will ever work on then you can throw together the most appalling hack-filled garbage code and it won't _really_ matter, but as soon as there are other developers involved you should aim to write code that won't have them recoiling in horror.

For a whole framework to be useful on a project other people need to be able to write code using it. That means you need to document it, provide examples, write tutorials, and have tests that work. You need to keep it all up to date. You need to maintain the code. You need to answer questions that people have when they encounter things they don't understand. You need to be willing to accept pull requests and patches, and criticism and new ideas. And so on, ad infinitum. Your code, __even if it's brilliant__, is already a long way behind a popular open framework that already has all this.

You need other developers to use the code for it to become something useful.

### Your code is much worse than you think.

Most code is awful when it's first written. It's poorly written and full of bugs. Quite often it doesn't actually work. It needs to be beaten in to something great. On any sufficiently complex project takes more time than a single developer can put in; you physically _can't_ write a whole framework on your own because there's just too much to do. Consequently if you're the only developer putting time in to it the code isn't going to be good enough for other people to pick it up.

One option that gets around this problem is to team up with other developers and build a framework together. This is often a good idea, but it shifts the problem from writing code to writing code in a team. That's certainly a better problem to work on.

### The majority of framework code is actually boring.

When you abstract something in to a framework you often have to cover cases that are rare but necessarily to deal with. You need to sit and work through each of the likely and unlikely cases, and write code that works well for each of them. Unfortunately that means writing code that you're never actually going to use. This throws up two problems - firstly it's incredibly hard to test whether code you don't use yourself is accessible, well-written and working, and secondly it's really boring.

No one is going to tell you that you've built something great if they never see it, but equally if it's not there the first person who needs it is going to cry foul. Consequently you have to write the code. And it's painful. It's no fun at all to write code you don't need.

You can always just leave out the stuff you don't need and ask someone else to contribute their code if they need to cover the problem you've ignored. That's not a bad solution - get someone else involved and have them write the code they need. If you can get enough people then everything gets written. That's what the major frameworks have already done.

### Using closed or unpopular code is a career limiting move.

Lastly, and perhaps most importantly really, any code that you write and deploy is effectively useless as soon as you change job if it's not something that other people can use. If you've been in a company long enough for your team to trust you to build an in-house library that's great, but that trust doesn't go with you when you leave. It's highly unlikely that your next employer is going to accept your framework in place of anything that they already use - it's unproven and unknown, it'll take resources for other developers to learn it, and those developers will have their own opinions about what they should be using, plus if you wrote it as part of your previous job it's likely to be owned by the previous company.

Using a well known open source framework puts everyone on a level playing field, with new developers able to come in to the team with existing knowledge of the code being used. That reduces the time it takes for a developer to be productive which from the point of view of the business is fantastic.

### Your time could be better spent on other things.

