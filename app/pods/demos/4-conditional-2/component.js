import Component from '@ember/component';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import fade from 'ember-animated/transitions/fade'

export default Component.extend({

  fade,

  * transition({ insertedSprites, removedSprites, keptSprites }) {
    insertedSprites.forEach(fadeIn);
    keptSprites.forEach(fadeIn);
    removedSprites.forEach(fadeOut);
  }

});
