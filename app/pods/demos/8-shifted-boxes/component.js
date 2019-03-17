import Component from '@ember/component';
import move from 'ember-animated/motions/move';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default Component.extend({

  // Write your transition here

  * transition({ insertedSprites, removedSprites, keptSprites }) {
    insertedSprites.forEach(sprite => {
      sprite.startTranslatedBy(0, 25);

      move(sprite);
      fadeIn(sprite);
    });

    keptSprites.forEach(sprite => {
      move(sprite);
      fadeIn(sprite);
    });

    removedSprites.forEach(sprite => {
      sprite.endTranslatedBy(0, 25);

      move(sprite);
      fadeOut(sprite);
    });
  }

  // ----------------------------------------------

});
