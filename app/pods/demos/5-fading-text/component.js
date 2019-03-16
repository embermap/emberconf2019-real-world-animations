import Component from '@ember/component';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';

export default Component.extend({

  // Write your transition here

  * transition({ insertedSprites, keptSprites, removedSprites }) {
    insertedSprites.forEach(sprite => {
      fadeIn(sprite);
    });

    keptSprites.forEach(sprite => {
      fadeIn(sprite);
    });

    removedSprites.forEach(sprite => {
      fadeOut(sprite);
    });
  },

  // ----------------------------------------------


});
