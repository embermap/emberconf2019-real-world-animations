import Component from '@ember/component';
import { wait as waitUtil, Motion } from 'ember-animated';

// Think of this motion as "freeze". The plan is to add it to ember-animated.
function wait(sprite, opts) {
  return new Wait(sprite, opts).run();
}

class Wait extends Motion {
  * animate() {
    yield waitUtil(this.duration);
  }
}

export default Component.extend({


});
