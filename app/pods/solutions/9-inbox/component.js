import Component from '@ember/component';
import { A } from '@ember/array';
import move from 'ember-animated/motions/move';
import { fadeOut } from 'ember-animated/motions/opacity';

export default Component.extend({

  /*
    Write your transition here
  */

  * transition({ keptSprites, removedSprites, beacons }) {
    removedSprites.forEach(sprite => {
      sprite.endAtSprite(beacons.trash);
      move(sprite);
      fadeOut(sprite);
    });

    keptSprites.forEach(sprite => {
      move(sprite);
    });
  },

  /*
    ____________________________
  */

  init() {
    this._super(...arguments);
    this.set('messages', A([...Array(20)].map((_, i) => i+1)));
    this.set('deletedMessages', A([]));
  },

  actions: {
    delete(message) {
      this.messages.removeObject(message);
      this.deletedMessages.pushObject(message);
    }
  }

});
