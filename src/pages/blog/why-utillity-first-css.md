---
title: Why Utility First CSS
path: '/blog/why-utility-first-css/'
date: 2019-04-27T09:14:52+00:00
author: admin
type: post
---

In a recent episode of the [Syntax](<https://syntax.fm/show/137/hasty-treat-css-frameworks>), Wes and Scott said that utility-first or functional CSS frameworks are not for them. They also invited everyone to share CSS frameworks. So I wanted to share a few utility-first frameworks, [Tachyons](<https://tachyons.io/>) and [Tailwind](<https://tailwindcss.com/docs/what-is-tailwind/>).

It's not that I disagree with them. But they are both really strong designers, and so them saying "not for me" is a strong signal if you're a strong designer like them. I mean just look at their websites. They both think of themselves as designers first, and it shows. Even beyond the clear polish of the sites, look at what they say they are good at. On Wes's [homepage](https://wesbos.com/), he lists design first of his skills. And Scott? The first line of his summary of qualifications? A [BFA](https://www.scotttolinski.com/about). When they say they do not need help with their CSS? Of course they don't.

Not everyone speaks visual design as their first language. It is like asking a native speaker (here, choose a language you're trying to learn) if this or that phrasebook, vocabulary building tool, or grammar checker, is helpful. Me? I'm not the strongest designer. And I'm still learning CSS.

Here's how I'd describe my design chops: Get me in front of a mock-up? I can tell you what works, what doesn't, what should move to where, and why I think so. Tell me to implement it? Sure, I can do that. For two years of college, I did layout for school papers using InDesign, so getting a layout to look ok given a set of basic constraints is something I can do and do well. But ask me to do it from whole cloth? Probably better to hire a designer to do that part. A workable metaphor: I'm a photographer, not a painter.

To their credit, Wes and Scott acknowledge that design is not everyone's strong suit, and they both accept that non-designers can really make use of a framework like Bootstrap or Material. In a way, those big frameworks are like taking a tour bus. You kind of get where you want, and you get something nice as long as you are willing to stay on the happy path. Otherwise? Well.

That's where I see frameworks like Tachyons fit in, somewhere between writing your own CSS (maybe with a preprocessor) and using a big framework like Bootstrap. And there are some big wins for someone who wants to do their design work somewhere in between.

First, it puts you on a typographic scale. If HTML had been implemented with a decent typographic scale to begin with, even undesigned web sites would have always looked at least OK. And because it's not much, you are still left with plenty of room for creativity because of the composability of the utility classes.

Second, it lets you prototype quickly. Since the design elements are class names, you just apply classes to the element and see the effect. You may think it is easy enough to edit classes in the CSS file instead of in HTML classes&mdash;after all we stopped using inline styles for reasons&mdash;but it turns out that you can iterate faster when you don't have to switch context between your html file and your css file. Maybe better editors will fix this problem.

Ok, so your classes start looking like this:

```html
class="button f6 link dim ph3 pv2 mb2 dib white bg-foxy"
```

(Here, foxy as in relating to a cartoon fox, `bg-foxy` gives `background-color: #c65200;`)

But as your project gets bigger, you can [extract repeated component classes](<https://tailwindcss.com/docs/what-is-tailwind/#component-friendly>). The documentation is for Tailwind, but nothing stops you doing the same thing using Tachyons. So you can move fast while you are prototyping, and then clean it up later. And that is a development pattern I'm pretty ok with: get it working first, clean it up as I get a better idea of what I'm making.

Third, you actually learn how to do CSS when you use a utility-first library. Since you prototype more rapidly, you get a better sense how things fit together. If you want to accomplish anything, you have to learn how floats and flexbox work. And the tools are right there for you: you the relevant classes directly to your html elements, and you can see the effect immediately. The reason is simple: you really are just composing CSS.

As long as I am adding my own two cents. Tachyons if you really love a minimalist modernism. They have a ton of [beautiful examples](<https://tachyons.io/components/>) for you to get started playing with. Tailwind has better documentation, and is easier to read. I'm more familiar with Tachyons now, but as of this writing, I am looking forward to re-wiring this site using Tailwinds.