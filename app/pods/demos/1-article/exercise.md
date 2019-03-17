# Lecture

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

p {
  animation-duration: 3s;
  animation-name: slidein;
}
```

# Exercise

In the `styles.scss` file, use

  1. A timing function of cubic-bezier(0.075, 0.82, 0.165, 1)
  2. A duration of 3s
  3. A translateY of 60px (attribute: transform)
  4. An fade from 0 to 1 (attribute: opacity)

to make a @keyframes animation and apply it to the article in the template.


# Links

- [MDN Source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Examples)
