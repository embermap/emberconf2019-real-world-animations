import Component from '@ember/component';
import { A } from '@ember/array';
import { fadeIn } from 'ember-animated/motions/opacity';
import resize from 'ember-animated/motions/resize';
import move from 'ember-animated/motions/move';
import { task, timeout } from 'ember-concurrency';

let transition = function*({ insertedSprites, removedSprites, beacons }) {
  insertedSprites.forEach(sprite => {
    let id = sprite.element.getAttribute('data-animation-id');

    sprite.startAtSprite(beacons[`cart-${id}`]);

    move(sprite);
    resize(sprite);
    fadeIn(sprite);
  });

  removedSprites.forEach(sprite => {
    sprite.endAtPixel({ x: window.innerWidth });
    fadeIn(sprite);
    move(sprite);
  });
};

export default Component.extend({

  transition,

  rules({ newItems }) {
    if (newItems[0]) {
      return transition;
    }
  },

  init() {
    this._super(...arguments);

    this.items = [...Array(100)].map((item, i) => i+1);
    this.addedItems = A([]);
  },

  flashItem: task(function*(item) {
    this.set('recentlyAddedItem', item);
    yield timeout(2500);
    this.set('recentlyAddedItem', null);
  }).restartable(),

  actions: {
    addItem(i) {
      this.addedItems.pushObject(i);
      this.flashItem.perform(i);
    }
  }

});
