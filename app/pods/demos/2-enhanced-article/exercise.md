# Lecture

Here's an example of using the Web Animations API:

```js
var nommingCake = document.getElementById('eat-me_sprite').animate(
[
  { transform: 'translateY(0)' },
  { transform: 'translateY(-80%)' }   
], {
  fill: 'forwards',
  easing: 'steps(4, end)',
  duration: aliceChange.effect.timing.duration / 2
});
```


# Exercise

  1. Port your @fadeUp animation from Lesson 1 to a `modifiers/fade-up.js` modifier, and apply it to the article in the template.

  2. Add a delay attribute. Apply it to the title and subsequent paragraphs.


# Links

- [Using the Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
