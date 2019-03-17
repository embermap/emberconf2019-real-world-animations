import Component from '@ember/component';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Component.extend({

  // Write your transition here

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
