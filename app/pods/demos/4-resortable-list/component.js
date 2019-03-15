import Component from '@ember/component';
import EmberObject from '@ember/object';
import move from 'ember-animated/motions/move';

export default Component.extend({

  init() {
    this._super(...arguments);

    this.set('items', [
      EmberObject.create({ id: 1, position: 1, name: 'A', color: 'red' }),
      EmberObject.create({ id: 2, position: 3, name: 'B', color: 'blue' }),
      EmberObject.create({ id: 3, position: 2, name: 'C', color: 'green' }),
      EmberObject.create({ id: 4, position: 4, name: 'D', color: 'purple' }),
    ]);
  },

  * transition({ keptSprites }) {
    console.log(this);
    keptSprites.forEach(sprite => {
      // sprite.applyStyles({
      //   'z-index': 99
      // });
      move(sprite);
    });
  },

  actions: {
    makeFirst(item) {
      item.set('position', 0);
      this.set('lastClickedItem', item);
    }
  }

});
