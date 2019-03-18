# CSS Transitions

For example,

```css
.title {
  transition: opacity 0.5s;
}
```


# Keyframe at-rule

Here's an example of using @keyframes animations:

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.title {
  animation-duration: 3s;
  animation-name: slidein;
}
```

In the `styles.scss` file, use

  1. A timing function of cubic-bezier(0.075, 0.82, 0.165, 1)
  2. A duration of 3s
  3. A translateY of 60px (attribute: transform)
  4. An fade from 0 to 1 (attribute: opacity)

to make a @keyframes animation and apply it to the article in the template.


# Web Animations API

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

1. Check out the `fade-up` modifier.

2. Add a delay attribute. Apply it to the title and subsequent paragraphs.
