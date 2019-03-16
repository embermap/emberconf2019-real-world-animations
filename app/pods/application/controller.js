import Controller from '@ember/controller';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';
import { fadeOut } from 'ember-animated/motions/opacity';
import { wait as waitUtil, Motion } from 'ember-animated';

function wait(sprite, opts) {
  return new Wait(sprite, opts).run();
}

class Wait extends Motion {
  * animate() {
    yield waitUtil(this.duration);
  }
}

export default Controller.extend({

  isShowingTools: true,

  * transition({ removedSprites }) {
    removedSprites.forEach(sprite => {
      wait(sprite);
    });

    // removedSprites.forEach(sprite => {
    //   sprite.endAtPixel({ y: window.innerHeight });
    //   move(sprite);
    // });
    // removedSprites.forEach(sprite => {
    //   // sprite.reveal();
    //   // fadeOut(sprite);
    //
    //   sprite.applyStyles({
    //     opacity: 1
    //   });
    // });
    // if (removedSprites.length) {
    //   removedSprites[0].applyStyles({
    //     opacity: 0.5
    //     // 'background-color': 'green'
    //   });
    // }
    // yield rAF();
  },

  activeNavTransition: function * ({ receivedSprites }) {
    receivedSprites.forEach(sprite => {
      move(sprite);
      scale(sprite);
    });
  }

});
