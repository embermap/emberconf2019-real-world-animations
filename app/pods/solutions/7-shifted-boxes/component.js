import Component from '@ember/component';
import move from 'ember-animated/motions/move';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import { wait } from 'ember-animated';

export default Component.extend({

  // Write your transition here

  * transition({ duration, insertedSprites, removedSprites, keptSprites }) {

    for (let i = 0; i < insertedSprites.length; i++) {
      let sprite = insertedSprites[i];
      yield wait(duration * 0.3);
      sprite.startTranslatedBy(0, 25);

      move(sprite);
      fadeIn(sprite);
    }

    keptSprites.forEach(sprite => {
      move(sprite);
      fadeIn(sprite);
    });

    for (let i = removedSprites.length; i > 0; i--) {
      let sprite = removedSprites[i-1];
      yield wait(duration * 0.3);
      sprite.endTranslatedBy(0, 25);

      move(sprite);
      fadeOut(sprite);
    }
    // });
  }

  // ----------------------------------------------

});
