# yamfw.js
Yet Another Microframework.js

Does one thing - puts text inside a div on your html thing.

---

## Dependencies

- jQuery, but not for long
- ShowdownJS (optional, if you want Markdown instead of pure HTML)

---

## How to use

1. Give your target content `<div>` a pretty ID, and add some arbitrary CSS class to your navigation buttons. Remember these names.
2. Put a `<script>` tag somewhere in the tail end of your `index.html`, and create an yamfw instance:

```javascript
  const yamfw = new yamfw( { id-of-target-div }, { class-of-nav-buttons }, { showdownjs converter });
  yamfw.initialize();
```
---

## Questions

1. Why?
> Because.

Oh, a real answer? Here goes:

> I've come back to this kind of little function way too often when dealing with static sites, so I thought about packaging the code into a single thing I can publish and reuse without having to code it from scratch everytime (no matter how simple it is).
2. Why not initialize it in the constructor, or pass the constructor arguments inside the init function instead?
> That's an excellent question.


> Future extensibility or something, IDK.
