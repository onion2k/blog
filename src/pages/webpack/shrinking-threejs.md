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

There are only two ways reduce the size of your code. You can compress it or you can remove it. In general compression is easier, and most modern web building tools will do the job for you. A basic Webpack setup using webpack-uglify can do a pretty amazing job of stripping out all the unnecessary and unused code from an ES6 application using tree-shaking, and then minify the entire thing so it's much smaller. Most web hosts are configured to use gzip compression to serve your assets too, so that's another win. Everything is downloaded faster, and uses less data. These are *good things*.

However, if you use large libraries that are based on ES5 then you're often not benefiting from any code removal that Webpack can do. The pre-built versions of ibraries and frameworks tend to be distributed as ES5 modules in NPM, so Webpack can't do much with them (yet). This is especially true for webpages that use the three.js WebGL library - while it's filled with brilliant things that can make amazing 3D pages, a lot of the time three.js pages are served with code that isn't used at all. That's not good.

There is a way to build a page using three.js without sending everything to the user though. It just takes a little more effort.

Rather than including the three.js monolith and using `THREE.<class>` we need to import each individual closure in to our code. So, to use `THREE.Scene` we need to import the Scene class and, optionally but it's a handy thing to do, put it in our own THREE object container.

```javascript
import { Scene } from '../node_modules/three/src/scenes/Scene';

const THREE = { Scene: Scene };
```

When we build the application this will import the Scene class, and it's dependencies that are imported within Scene.js, *but nothing else*. For a simple page this can result in a much smaller build.

The problem with this approach is that Webpack can't build the application using it's defaults. When it encounters code in three.js that loads a shader it doesn't understand what to do, so it breaks. Three.js uses shaders for practically everything so this is a significant problem. Fortunately there's a very simple solution - use raw loader to import the GLSL shader code as plain text.

To use the raw loader in Webpack we need to install it from NPM;

```javascript
npm install --save raw-loader
```

Once installed it's a simple matter of telling Webpack to use it when it encounters a glsl file.

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

Now using Webpack to build a three.js app works, and results in a considerably smaller build.