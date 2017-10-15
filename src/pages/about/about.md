---
path: "/website-standards"
date: "2017-09-01T17:12:33.962Z"
title: "Website Standards"
bg: "url(https://source.unsplash.com/xMScfzgJ7_c)"
bgLink: "https://unsplash.com/photos/xMScfzgJ7_c"
bgTitle: "Background image"
bgAuthor: "Luisa Rusche"
---

I built my first website in September of 1997. It was my homepage. It was *literally* a home page because it lived in my /~ta6cne directory on my university's engineering school email and web server, my home directory. I don't have a copy of it any more. Nor does [archive.org](https://archive.org). This makes me a little sad.

Not **too** sad though, because that first website was terrible by today's standards, and probably by 1997's standards too. I was proud of it, but I'm self-aware enough not to believe my first foray in to website development was anything really worth talking about. Since then I've gone on to build much better, much bigger things, some of which I am genuinely proud of. They were great. I've also discovered a lot about what I think a website needs. Those things are what I call a '*website standard*'. I don't put a site live until exceeds this basic set of minimum essentials.

This isn't about what a website has to *do*. There are a huge number of features that a modern website can have, or not have. However, whether its's just a method of distributing information (aka a 'brochure' site), selling something (ecommerce), or an application in its own right, every website needs to have a few things to make it a good website.

#### Purpose

A website needs a reason to exist. That doesn't have to be some lofty goal, or a business model, or drive to become something more than it is, but there has to be a good reason for the user to spend time and energy visiting it. Building a site for a business that will get *no* additional sales or happier customers from it's existence is a pointless waste of time and money, and any professional developer should say no rather than take money for the work.

There isn't much more to say about purpose. Whether or not a site should get built in the first place is up to the site owner, the developers, and ultimately the users. If there's doubt then it's something that can be measured through creating a single page website to gauge traffic, but even that can be misleading.

#### Quality

Every website should work. That means information that's kept up-to-date and managed properly. It means communicating with the user to tell them what they're seeing, and why they're seeing it. It means a clear design that doesn't employ [dark patterns](https://darkpatterns.org/hall-of-shame). It means testing the website properly, in a reasonable selection of different browsers, with and without common plugins. That might be manual testing, or automated testing. It means code that does what it's supposed to do even when the user is doing things that aren't expected. It's defensive code that validates inputs in the client and on the server, and displays useful error messages that help the user achieve a goal. Broken websites are a problem. They *really* aggrevate users, and rightly so.

Quality in both design and development is something that's assessible, and to an extent even measurable. There are things that every good website developer should do; research best practises and follow them.

#### Accessibility

Accessibility is not simply 'making a website work for disabled people'. That's part of what an accessible website is, but more broadly speaking it's actually making a website work for **all** people. That means making it work for a user who has sight problems, motor problems, who isn't well educated, who has a limited internet connection or an old computer, or who has very limited amounts of time. There are a huge number of cases where a user might need a more accessible website without having any recognised disabilty.

Accessibility is something that needs to be designed in from the very start. You can't make a great website that gets layers of enhancement as new technologies are availabe in the browser by starting with the full experience and working backwards. You have to start with the minimal experience and work out where you can add to it.

#### Security

A website has to be secure. The users of every website deserve to be protected from any attack that a malicious third party could carry out by invading the code that the user downloads and runs in their browser. This means guarding against potential risks by using, at the very least, a properly configured SSL certificate to encrypt any personal information that they might send. This also means using good validation of data that's entered by the user, and validation on the server to remove any data that might be harmful.

In more up-to-date browsers there are technologies that can be used to protect the user (*and the website*) from more advanced attacks. For example a subresource integrity hash (SRI Hash) can be added to a `<script>` or `<style>` element to ensure that only the expected content is loaded. If you use a content delivery network (CDN) then this is important - anyone managing to poison the CDN would be able to deliver malicious code to your users, perhaps sending their input to another server. On an ecommerce website this would be disasterous. Additionally, a Content Security Policy (CSP) can be sent in the webpage's headers to tell the browser what third party servers the page should trust. This means even if the content of a webpage is hacked it still can't be used to attack a visitor. These features are not hard to implement, but they rarely are. Developers must do more.

#### QA

What these things really come down to is QA. Many developers conflate 'quality checking' and 'quality assurance'. Quality checking is going through a website at the end and making sure things have been done properly, and going back to fix things if they haven't. Quality assurance is the process of building a website in a way that **automatically** results in good code that works.

* Design for accessibility first. It used to be the case that we just designed a website and then fixed it in any browsers it didn't work in. Then we designed websites to work on mobile first followed by larger tablet and desktop screens. Now it's better to design for accessibility first, so the website works for **everyone** and progressively enhance the code to take advantage available technologies on different target browsers. It's actually less work to approach a design in this way rather than building a complex site and then trying to fix broken features where technologies aren't available, and it results in a better experience for the user. It's a win-win.
* Use a synchronous browsing tool such as [BrowserSync](https://www.browsersync.io/) to synchronise what you do in one browser across a range of browsers. Having your website open in 4 different browsers and a couple of mobile devices, and having input in one sync across the others, means you can easily see where cross-browser issues occur. You can write code for every target browser at the same time. It's brilliant.
* Use a browser virtualisation service (eg [BrowserStack](https://www.browserstack.com/)) to access browsers that are outside of your preferred development platform. Testing in IE11 or Samsung Browser is a pain if you use a Mac or an iPhone. There are tools available to help.  
* Use a good tool to build your website assets (eg [Webpack](https://webpack.js.org/)). Using a tool like Webpack affords the opportunity to do things that you'd never do writing code by hand, such as minification and SRI hashing.
* Use automated testing tools to check quality (eg [Lighthouse](https://developers.google.com/web/tools/lighthouse/) or [Dareboost](https://www.dareboost.com/)). Scores from an automated testing tool aren't the goal, but they do work as a proxy for quality. Low scores *usually* mean a poor user experience. Aim high.
* Think about security as a high priority feature. **Use SSL**. Use SRI hashing and a CSP. Do as much as is reasonably posssible to protect the user's privacy. Over the coming years these features will differentiate one website from another, especially as Google is starting to use them in it's search rankings.
* Develop a 'go live' checklist. Every website we build should have a minimum standard of features that have to be in place before it can be put live. Over time it's possible to build such a list simply by writing down what you do every time you deploy some new code. When things go wrong, add to the list and check that thing won't happen again the next time. Learn from your mistakes.

