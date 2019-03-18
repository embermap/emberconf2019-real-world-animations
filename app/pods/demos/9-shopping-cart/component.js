import Component from '@ember/component';
import { A } from '@ember/array';
import { task, timeout } from 'ember-concurrency';
import { guidFor } from '@ember/object/internals';


export default Component.extend({

  /*
    Write your transition here
  */

  /*
    ____________________________
  */

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
