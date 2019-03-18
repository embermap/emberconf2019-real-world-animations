import Component from '@ember/component';
import { A } from '@ember/array';
import { computed } from '@ember/object';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import move from 'ember-animated/motions/move';

export default Component.extend({

  // Write your transition here

  * transition({ insertedSprites, removedSprites, keptSprites }) {
    insertedSprites.forEach(sprite => {
      fadeIn(sprite);
    });

    keptSprites.forEach(sprite => {
      move(sprite);
      fadeIn(sprite);
    });

    removedSprites.forEach(sprite => {
      fadeOut(sprite);
    });
  },

  // ----------------------------------------------

  init() {
    this._super(...arguments);
    this.set('tags', [
      'Music',
      'Fashion',
      'Car',
      'Real Estate',
      'Beauty',
      'Travel',
      'Design',
      'Food',
      'Wedding',
      'Movie',
      'Photography',
      'Law',
      'Health',
      'Technology',
      'SEO',
      'History',
      'Marketing',
      'Fitness',
      'Education',
      'Economics',
      'Entertainment'
    ].sort());
    this.set('myTags', A([]));
  },

  sortedTags: computed('myTags.[]', function() {
    return this.myTags.sort();
  }),

  actions: {
    toggleTag(tag) {
      if (this.myTags.includes(tag)) {
        this.myTags.removeObject(tag);
      } else {
        this.myTags.addObject(tag);
      }
    }
  }

});
