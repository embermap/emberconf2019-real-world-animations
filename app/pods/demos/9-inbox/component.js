import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({

  /*
    Write your transition here
  */

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
