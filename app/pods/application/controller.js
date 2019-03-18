import Controller from '@ember/controller';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';
import fade from 'ember-animated/transitions/fade';

export default Controller.extend({

  init() {
    this._super(...arguments);

    this.set('isShowingTools', this.getSession().isShowingTools);
  },

  fade,

  activeNavTransition: function * ({ receivedSprites }) {
    receivedSprites.forEach(sprite => {
      move(sprite);
      scale(sprite);
    });
  },

  getSession() {
    let defaultSession = { isShowingTools: false };
    let persistedSession = JSON.parse(window.localStorage.getItem('2019-real-world-animations'));

    return persistedSession || defaultSession;
  },

  updateSession(key, value) {
    let session = this.getSession();
    session[key] = value;
    window.localStorage.setItem('2019-real-world-animations', JSON.stringify(session));
  },

  actions: {
    toggleTools() {
      let newValue = !this.isShowingTools;

      this.set('isShowingTools', newValue);
      this.updateSession('isShowingTools', newValue);
    }
  }

});
