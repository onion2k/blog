---
path: "/why-i-use-webpack"
date: "2018-02-24T12:13:33.962Z"
title: "Webpack for Security"
bg: "linear-gradient(to right, #ad5389, #3c1053)"
bgLink: "https://uigradients.com/#eXpresso"
bgTitle: "eXpresso"
bgAuthor: "uiGradients"
tags: "webpack"
---

Front end development is becoming increasingly complicated. The proliferation of frameworks, bundlers, cli tools, and browser APIs abstracted into libraries that give web pages the ability to do amazing and wonderful things are incredible, but they come with a cognitive cost to the developer. This complexity has lead to a class of problems called “JavaScript Fatigue”.

JavaScript fatigue could be defined as a natural reaction to the unreasonable expectation that every project needs to move to the latest tools whenever there’s some small but tangible benefit from doing so. Being happy to live without the latest ‘industry standard’ is seen as a equivalent to being a development Luddite. There must surely be something wrong with any developer who doesn’t spend every waking minute reading about and then implementing everything that can shave a few milliseconds off a compile time or save a handful of bytes in a bundle file. Often the desire to switch to the newest tools is honourable, and the developers have the user in mind, but sometimes it’s less clear, with arguments about ‘coolness’ and ‘fear of missing out’. This leads some developers question whether these tools really give us the benefits we’re told they do.

At the extremes some fatigued developers argue build tools are actually unnecessary, and even unwelcome. Why should a developer learn something complicated if they can build a fantastic experience for the user without it? Perhaps you don’t need a build tool if you’re making something simple. Maybe you don’t need on if you *really* know what you’re doing. I’m not qualified to answer those questions, but I do think build tools are important, even *vital* to front end engineering.

The reason is straightforward. Features that require manual effort every time a site is deployed are the first to be removed. Without a build tool adding *everything* that changes between each deploy requires manual effort, which makes justifying those features much harder. A developer has to consider the opportunity cost.

Conversely, a developer who uses a build tool can automate those things, which means features that can be added automatically by writing code once still get included.

This is best illustrated with an example.

Recently there have been a number of relatively high profile attacks on websites with JavaScript libraries being infected by cryptocoin miners, and as-yet-not-seen-in-the-wild keylogging through CSS. If a website is written to take advantage of subresource integrity (SRI) hashes on script and link tags this sort of attack is virtually impossible.

The process to add an SRI hash to a script requires calculating the SHA384 value for the file’s contents. You wouldn’t do that by hand because maths, but most operating systems have tools available. For example, on OSX or Linux you can use opensll;

`openssl dgst -sha384 -binary FILENAME.js | openssl base64 -A`

That’s something that would need to be calculated *every* time a file changes. Imagine needing to run that command and copy the output from the command line in to your HTML file (or files if you have multiple entry points to your website). It’d add a few seconds of manual process to every deployment. If you’re in a rush, or you’re iterating code quickly, that’ll be missed or done wrong. Eventually it’ll be removed.

Furthermore, SRI hashing isn’t something that every browser supports. It’s currently only available in Chrome, Firefox and Safari. Edge is adding it in version 17. It’s not on iOS’s roadmap yet.

What developer keep a feature that doesn’t add anything for some users, is invisible to every user, and is only of benefit if things have gone very, very wrong? Very few.

Consequently this is why I believe front end developers need a build tool - a feature that’s relatively hard to apply manually can be automated, and if that feature gives the user a considerably better experience even in limited circumstances (eg they don’t run hacked code) then it’s worthwhile accepting the pain and hassle a build tool can add to the development process.

This isn’t only true for SRI hashing. There are myriad features that most developers won’t spend time adding if there isn’t a significant obvious benefit. Build tools mean websites are better.
