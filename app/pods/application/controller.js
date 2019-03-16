import Controller from '@ember/controller';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';

export default Controller.extend({

  * transition({ receivedSprites }) {
    receivedSprites.forEach(sprite => {
      move(sprite);
      scale(sprite);
    });
  }

});
