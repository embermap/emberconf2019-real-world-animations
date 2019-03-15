import Component from '@ember/component';
import { A } from '@ember/array';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import resize from 'ember-animated/motions/resize';
import scale from 'ember-animated/motions/scale';
import move from 'ember-animated/motions/move';
import { later } from '@ember/runloop';
import { wait } from 'ember-animated';
import { task, timeout } from 'ember-concurrency';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';

let transition = function*({ duration, insertedSprites, removedSprites, beacons }) {
  console.log(arguments[0]);
  insertedSprites.forEach(sprite => {
    let id = sprite.element.getAttribute('data-animation-id');

    sprite.startAtSprite(beacons[`cart-${id}`]);

    move(sprite);
    resize(sprite);
    fadeIn(sprite);
  });

  // if (removedSprites.length) {
  //   yield wait(duration);
  // }
  removedSprites.forEach(sprite => {
    // console.log(sprite.element);
    // sprite.endTranslatedBy(sprite.initialBounds.width);
    // console.log(sprite.initialBounds.width);
    // sprite.endTranslatedBy(sprite.initialBounds.width, 0);
    sprite.endAtPixel({ x: window.innerWidth });
    // wait(duration);
    // fadeOut(sprite);
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
