---
path: "/shrinking-threejs"
date: "2017-10-14T17:12:33.962Z"
title: "Shrinking Three.JS with code changes"
bg: "linear-gradient(to right, #536976, #292e49)"
bgLink: "https://uigradients.com/#RoyalBlue+Petrol"
bgTitle: "RoyalBlue Petrol"
bgAuthor: "uiGradients"
tags: "webpack,threejs"
---

There are only two ways reduce the size of your code. You can compress it or you can remove it. In general compression is easier, and most modern web building tools will do the job for you. A basic Webpack setup using webpack-uglify can do a pretty amazing job of stripping out all the unnecessary and unused code from an ES6 application and minify the entire thing so it's much smaller. Most web hosts use gzip compression to get your assets too, so that's another huge win for the user. Everything is downloaded faster, and uses less data. These are *good things*.

Unfortunately that's not the whole story though.

If you use libraries, and most websites do, then you're often not benefiting from any code removal that Webpack can do. Libraries and frameworks tend to be distributed as ES5 JavaScript modules in NPM, so Webpack can't do much with them yet. This is especially true for webpages that use the three.js WebGL library - it's huge, and filled with brilliant thing that most apps don't use. That's all code that doesn't need to be sent to the user.

Using a 'trick' though, there is a way to build a page using three.js without sending everything down the wire. It just takes a little more effort.

Rather than including the three.js monolith and using `THREE.<class>` we need to import each individual class in to our code. For example, to use `THREE.Scene` we'd import the Scene class and put it in our own THREE object container.

```javascript
import { Scene } from '../node_modules/three/src/scenes/Scene';

const THREE = { Scene: Scene };
```

When we build the application this will import the Scene class, and it's dependencies that are imported in Scene.js, *but nothing else*. This results in a much smaller build.

**However...**

This all works brilliantly, at least in Webpack, until the point where you import something that uses a GLSL shader. Then it breaks. Three.js uses shaders for practically everything so this is a problem. Fortunately there's a very simple solution - use a loader to import the GLSL shader code as raw text.

To use the raw loader in Webpack we need to install it from NPM;

```javascript
npm install --save raw-loader
```

Once that's been installed it's a simple matter of telling Webpack to use it when it encounters a glsl file.

```javascript
module: {
    rules: [
        {
            test: /\.(glsl|frag|vert)$/,
            use: 'raw-loader'
        },
    ]
}
```
