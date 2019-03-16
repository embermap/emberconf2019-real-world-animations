import Component from '@ember/component';
import move from 'ember-animated/motions/move';

export default Component.extend({

  init() {
    this._super(...arguments);

    this.set('items', [
      { id: 1, name: 'A', color: 'red' },
      { id: 2, name: 'B', color: 'blue' },
      { id: 3, name: 'C', color: 'green' },
      { id: 4, name: 'D', color: 'purple' },
    ]);
  },

  * transition({ keptSprites }) {
    keptSprites.forEach(sprite => {
      move(sprite);
    });
  },

  actions: {
    moveHigher(item) {
      let index = this.items.indexOf(item);
      if (index > 0) {
        let items = [...this.items];

        this.set('items', reorderElement(items, index, index - 1));
      }
    },

    moveLower(item) {
      let index = this.items.indexOf(item);
      if (index < this.items.length) {
        let items = [...this.items];

        this.set('items', reorderElement(items, index, index + 1));
      }
    }
  }

});

function reorderElement(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);

  return array;
}
