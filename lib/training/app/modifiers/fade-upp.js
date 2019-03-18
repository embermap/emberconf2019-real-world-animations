import { Modifier } from 'ember-oo-modifiers';

const FadeUpModifier = Modifier.extend({

  // eslint-disable-next-line
  didInsertElement(args, { duration = 3000, delay = 0 }) {
    this.element.animate([
      { opacity: 0, transform: 'translateY(60px)' },
      { opacity: 1, transform: 'translateY(0px)' },
    ], {
      duration,
      delay,
      easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      fill: 'backwards'
    });
  }

});

export default Modifier.modifier(FadeUpModifier);
