---
title: The Observer Pattern
path: '/blog/the-observer-pattern/'
date: 2019-06-10T09:14:52+00:00
author: admin
type: post
---

I read somewhere that if you can't spot the classic design patterns, you can't get work as a programmer in an OO language. On the other hand, I read that design patterns are beyond the scope of most interviews, except for Singleton and Factory. When I get there, I will have posts on those as well.

I took Aaron Maxwell's Pythonic Design Patterns live training on the Safari platform. Python is different enough from Java that I am glad I didn't go for a class which gives its code examples in Java. Nothing against Java, just I haven't learned it yet. The training covered setting and getting properties, the observer pattern, and factories.

The observer pattern involves an observer and an observable. The observable keeps track of some complicated changeable state, and dispatches a message to the observer which then deals with the message in some way. This is kind of how [Redux works with React](<https://redux.js.org/basics/data-flow). React Components sit around waiting for state to change, and they are the observers. The store is the observable, which dispatches a message to the relevant components in response to an action.

It is also kind of how lifting state works behind the scenes. Instead of having to change state in multiple places at once, you have a single source of truth in a parent component (observable) which keeps track of changes, and sends a message to the children components (the observers) as props.

Anyway, here is what the observer pattern looks like in code. We were assigned to code a lab where an observable keeps track of the size of some file, and any number of observers. So let's dig in with some code. Since we are doing object oriented programming, we should be able to say the following:

```python
watcher = FileWatcher("./example.txt")

watcher.register(bob := FileObserver("Bob"))
watcher.register(john := FileObserver("John"))
watcher.register(stacy := FileObserver("Stacy"))
```

That is, we should be able to instantiate an object using a `FileWatcher` class (watching the .txt file), and several observers, instantiated on the `FileObserver` class (having names Bob, John, and Stacy). The `:=` is an [assignment expression](https://medium.com/hultner/try-out-walrus-operator-in-python-3-8-d030ce0ce601), new as of Python 3.8, which lets you assign something to a variable and then call it all at once. Once those are instantiated, it should be possible to call watcher's register method so that they are registered with `watcher`.

And we implement that like so:

```python
class FileWatcher:
    def __init__(self, path_of_file_to_watch):
        self.path = path_of_file_to_watch
        self.subscribers = set()
        self.__file_size = 0

    def register(self, who):
        self.subscribers.add(who)
```

`self.subscribers` is initialized as an empty set. A set is basically a list that does not accept duplicates, and also efficient like a hash. Calling `add` to a set that already has that member results in no action. That's the right data structure here, since once you're subscribed, there's no reason to be subscribed a second time. Initializing self.`__filesize` at 0 means that the first run will report the file size. If you want a silent start, you can initialize it with the filesize.

Here is `FileObserver`:

```python
class FileObserver:
    def __init__(self, name):
        self.name = name

    def update(self, message):
        print(f"{self.name} noticed that the file is now {message} bytes")
```

Each `FileObserver` has a name, which we save on self when it is instantiated. It has an update method so that `FileWatcher` can pass it a message and it does something accordingly. Here, it just prints a nice message to the screen.

So now that the observers can handle a message, we can dispatch a message from the observable. We are already keeping track of the objects which should receive the message in each `FileWatcher` as `self.subscribers`, so we call an `update()` method on each, passing in the message. Python makes that pretty easy: We add this method to `FileWatcher`:

```python
    def dispatch(self, message):
        for subscriber in self.subscribers:
            subscriber.update(message)
```

Pretty neat.

So now let's add a run method to `FileWatcher` so we can run it. It should periodically check if a file has changed size, and then dispatch a message with the file size. You will want to wait a second for each cycle, which you can take care of with `sleep(1)`, and some features from Python's standard `os` library can be used to check the file size. We already defined the `filepath` that gets passed in above.

```python
from time import sleep
import os

class FileWatcher:

    # ...

    def run(self):
        while True:
            sleep(1)
            if self.__file_size != os.path.getsize(self.path):
                self.__file_size = os.path.getsize(self.path)
                self.dispatch(f"{self.__file_size}")
            else:
                print("skip")
```

It works!

The `else: print("skip")` is there as scaffolding: It lets me know that the code is running. In production code, that would live in a test file, but I left it in here to show my work.
