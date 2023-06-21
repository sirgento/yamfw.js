# yamfw.js
Yet Another Microframework.js

Does one thing - puts text inside a div on your html thing.

---

## Dependencies

- Some server environment (just use `npx http-server` or `python -m http.serer`) because of the way the Javascript `fetch` API works.
  - Needed only for development, anywhere you decide to host *will* be a server environment.
- ShowdownJS (optional, if you want to use Markdown (because it's easier) instead of pure HTML)
  - Tested initialy with ShowdownJS 2.1.0. Will try to keep documented somewhere about versions compatibility.

---

## How to use

1. Give your target content `<div>` a pretty ID, and add some arbitrary CSS class to your navigation buttons. Remember these names.
    1. If you so desire, you can use a "real" CSS class from some framework or custom CSS you're gonna be using. It's just for the `document.getElementsByClassName` JS method.
2. Put a `<script>` tag somewhere in the tail end of your `index.html`, and create an yamfw instance:

```javascript
  const yamfw = new Yamfw( { target-div-id }, { navigation-buttons-class }, { where-are-the-files }, { nested-yamfw }, { showdownjs-converter });
  yamfw.initialize();
```

3. `nested-yamfw` and `showdownjs-converter` are optional. That's why they are in the tail end of the constructor.
---

## Questions

1. Why?
> Because.

Oh, a real answer? Here goes:

> I've come back to this kind of little function way too often when dealing with static sites, so I thought about packaging the code into a single thing I can publish and reuse without having to code it from scratch everytime (no matter how simple it is).
2. Why not initialize it in the constructor, or pass the constructor arguments inside the init function instead?
> That's an excellent question.

> Future extensibility or something, IDK.
