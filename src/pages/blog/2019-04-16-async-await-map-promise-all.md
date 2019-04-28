---
title: How to use async/await with map and Promise.all
path: '/blog/async-await-map-promise-all/'
date: 2019-04-16T09:14:52+07:00
author: admin
type: post
---

I found myself stuck on using the map function with async and await. It took me relearning how to work with promises to figure it out, but once I figured it out, the syntax turned out to be pretty nice and readable.

JavaScript's async and await syntax is new as of ES2017. I think the syntax is really neat because it allows me to write shorter, easier to understand code than a pyramid of promises and thens, similar to how promises are an improvement on callback hell. There are more comprehensive explanations of async and await out there, like this one from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), from [Javascript.Info](https://javascript.info/async-await), and from [Dr. Axel R.](http://2ality.com/2016/10/async-function-tips.html) Here is a [JavaScript Jabber](https://devchat.tv/js-jabber/jsj-329-promises-promise-finally-and-async-await-with-valeri-karpov/) episode, super helpful.

But what happens when you want to get back a bunch of data from a bunch of requests? There is no `await all` in JavaScript. That's where `Promises.all()` comes in. Promises.all() collects a bunch of promises, and rolls them up into a single promise. Once all of the inner promises resolve successfully, Promise.all() returns a resolved promise with all of the inner promises as resolved. To make things faster, once any of the inner promises rejects, Promise.all() rejects.

The main point is that Promise.all() turns an array of promises into a single promise that, if things work, resolves into the array you want. Everything else is just details.

Somehow, it took me a long time to get unstuck. Here is the code that I finally got working, and hopefully this helps with that explanation.

Suppose you hit a REST endpoint and get an array of URLs for the REST endpoints which contain what you are ultimately after. For example, you know want to find some information about the movies R2-D2 was in from the Star Wars API. For whatever reason, you can't use the SWAPI GraphQL instead. We know that fetching from the network is an asynchronous operation, so we will have to use callbacks, promises, or the async and await keywords. Since R2-D2 was in several movies, will have

So first, let's set up. Let's focus on just the smallest bit of functionality we're working on, so we'll use Node.js on the command line. Node.js doesn't come with fetch, so let's install it with npm or yarn.

```bash
npm install node-fetch --save-dev
```

or

```bash
yarn add node-fetch --dev
```

One gotcha with async/await is that an await keyword is only allowed inside an async function. In a real program, you're probably encapsulated enough so that you can just slap an async keyword on the function you're using the await keyword in, but inside of a scratch file, we want to abstract away from the enclosing context But as Javascript programmers, we know how to get around that by wrapping what we want in an instantaneously invoked function expression.

```javascript
// prettier-ignore
const fetch = require('node-fetch')

// prettier-ignore
(async () => {
    try {
      let characterResponse = await fetch('http://swapi.co/api/people/2/')
      let characterResponseJson = await characterResponse.json()

      console.log(characterRepsonseJson)
    } catch (err) {
      console.log(err)
    }
  }
)()
```

So now we have the basic async/await syntax working, and we can inspect the response to see that we want the films field. It is an array of URLs.

```javascript
let films = characterResponseJson.films.map(async filmUrl => {
  let filmResponse = await fetch(filmUrl)
  let filmResponseJSON = filmResponse.json()
  return filmResponseJSON
})

console.log(films)
```

When you run this code, you get an array of pending promises. You need that new `async`, otherwise the awaits inside the arrow function won't work. If you don't `await` for the fetch, you get a bunch of rejected promises, and errors telling you to handle your promise rejections.

But recall, a Promise.all() takes an array of promises and wraps them into a single promise. So we wrap our map function. And we already know some nice syntax for dealing with a single promise. We can await it.

```javascript
let characterResponse = await fetch('http://swapi.co/api/people/2/')
let characterResponseJson = await characterResponse.json()
let films = await Promise.all(
  characterResponseJson.films.map(async filmUrl => {
    let filmResponse = await fetch(filmUrl)
    return filmResponse.json()
  })
)
console.log(films)
```

For the sake of comparison, the equivalent code in promises looks like:

```javascript
fetch('http://swapi.co/api/people/2/')
  .then(characterResponse => characterResponse.json())
  .then(characterResponseJson => {
    Promise.all(
      characterResponseJson.films.map(filmUrl =>
        fetch(filmUrl).then(filmResponse => filmResponse.json())
      )
    ).then(films => {
      console.log(films)
    })
  })
```

For me, the first set of .then().then() is pretty semantic, I can follow that almost as well as the async/await syntax. But once we're inside the `Promise.all()`, things start getting hard to follow using only the promises syntax. Whatever action we are going to perform on the films will replace the console.log, and in the `.then` chaining syntax, that is already buried 3-levels of indentation deep. Shallow code is easy to understand code.
