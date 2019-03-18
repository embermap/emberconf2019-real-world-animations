import Component from '@ember/component';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';
import { wait as waitUtil, Motion } from 'ember-animated';

function wait(sprite, opts) {
  return new Wait(sprite, opts).run();
}

class Wait extends Motion {
  * animate() {
    yield waitUtil(this.duration);
  }
}

export default Component.extend({

  transition: function*({ insertedSprites, removedSprites, beacons }) {
    insertedSprites.forEach(sprite => {
      sprite.startAtSprite(beacons['source']);
      move(sprite);
      scale(sprite);
    });

    removedSprites.forEach(sprite => {
      sprite.endAtSprite(beacons['source']);
      move(sprite);
      scale(sprite);
    });
  },

  placeholderTransition: function*({ removedSprites }) {
    removedSprites.forEach(sprite => {
      if (sprite.element.dataset.animationId === 'placeholder') {
        wait(sprite);
      }
    });
  }

});
