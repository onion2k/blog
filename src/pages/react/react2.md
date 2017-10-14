---
path: "/react/links"
date: "2017-09-02T17:12:33.962Z"
title: "Create React App"
bg: "linear-gradient(to right, #000000, #e5008d, #ff070b)"
bgLink: "https://uigradients.com/#Shift"
bgTitle: "Shift"
bgAuthor: "uiGradients"
tags: "react"
---

React is a great framework that does some really impressive things, but I found my first experience of it *painful* to set up. I wasn't particularly familiar with the React toolchain. Getting Webpack and Babel working nicely was hard enough, but adding in tools that increase productivity like automatic reloading, or a build chain with minification, or securing a build with SRI hashing and a CSP, was a world of pain. Learning a lot of different technologies all at the same time is less than ideal. What makes it worse is that the error messaging from a lot of the tools in the React ecosystem are very opaque so debugging a build and working out which of the arcane incantations I'd got subtly wrong was *really* hard work.

In an ideal world the solution to this problem would be better tools, and better processes for reporting why they're not working. The React community are definitely working towards that goal but it's not there yet.

'Create React App' is an intermediary solution. It doesn't fix the problems but it does hide them away behind a set of sane defaults. This way when we're starting out we don't see them, and we're not put off by them.

The very first thing to do to use Create React App (CRA from here on in) is to install it. It's an NPM package that we'll need to install globally. This assumes that we've already got a working Node and NPM install. If you haven't then pop over to [nodejs.org](https://nodejs.org/) and get that set up first.

```javascript
npm install --global create-react-app
```

With CRA installed the next thing to do is actually create a React app.

```javascript
create-react-app myApp && cd myApp
```

'`myApp`' is both the name of the app that's created and the directory that it'll be created in. Consequently it's worthwhile putting it somewhere that you can find easily. I have a '`project`' directory in my home folder that I put everything in.


When CRA has done it's thing (it downloads a ton of dependencies so it can take a little while) you should have a directory containing a package.json file, a README.md file, and a /src directory with the actual React code, and a node_modules directory.

You can see your React app using;

```javascript
npm run start
```

One thing to note is that throughout CRA's output it tends to use `yarn` instead of `NPM`. You can use `Yarn` (it's awesome!) but I stick with `NPM` because I've been writing Node things for a while and I'm used to it. Plus, since NPM version 5 it does a lot of the things that made Yarn worthwhile. There's less reason to use Yarn now. But really they're pretty much interchangable.

When you start your CRA app what's actually happening behind the scenes is webpack-dev-server is starting up and listening to http://localhost:3000/, and building the application using Babel. When you load the app in your browser nice things like Socket.io and Hot Module Reloading are injected in to the HTML so that it reloads your code when you change things, and errors are directed back to Webpack so you can debug things by connecting to Node's debugging port in your IDE (eg VSCode).

If you now open /src/App.js in an editor and make a change to it, then save the file, you should see your automatically appear in the browser a few seconds later.

CRA isn't perfect, and eventually you might want to make a change that you can't actually do within the limits of the CRA framework. CRA gives you an escape hatch in the form of 'eject'. To remove the CRA dependency and get your app to the point where it would have been had you configured it by hand you can run;

**NOTE: Ejecting a CRA app is permanent. Do it on a feature branch so you can revert later.**

```javascript
npm run eject
```

After ejecting you can still run 'dev' and 'build' commands to work with your app, but you need to configure any changes to the dependencies yourself rather than having CRA do the hard work for you. After you've ejected you'll find new directories called /config and /scripts. Have a poke about in the config directory and you should get a good idea just how much hard work CRA has been doing for you.

There is an alternative to ejecting your app. Depending on what exactly you want to do you might be able to use the `react-app-rewired` NPM package instead. react-app-rewired replaces the react-scripts tool and gives you a few more options such as being able to override a webpack config. It's worth looking at first.