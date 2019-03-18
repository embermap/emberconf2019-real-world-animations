import Component from '@ember/component';
import { guidFor } from '@ember/object/internals';
import { A } from '@ember/array';
import { fadeIn } from 'ember-animated/motions/opacity';
import resize from 'ember-animated/motions/resize';
import move from 'ember-animated/motions/move';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({

  * transition({ insertedSprites, removedSprites, beacons }) {
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
  },

  init() {
    this._super(...arguments);

    this.items = [...Array(100)].map((item, i) => i+1);
    this.itemsInCart = A([]);
  },

  flashItem: task(function*(itemInCart) {
    this.set('recentlyAddedItem', itemInCart);
    yield timeout(2500);
    this.set('recentlyAddedItem', null);
  }).restartable(),

  actions: {
    addItem(i) {
      let itemInCart = { id: guidFor(), item: i };
      this.itemsInCart.pushObject(itemInCart);
      this.flashItem.perform(itemInCart);
    }
  }

});
