import { Modifier } from 'ember-oo-modifiers';

const FadeInModifier = Modifier.extend({

  didInsertElement() {
    this.element.animate([
      { opacity: 0 },
      { opacity: 1 },
    ], {
      duration: 750
    });
  }

});

export default Modifier.modifier(FadeInModifier);
