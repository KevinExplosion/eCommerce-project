import Ember from 'ember';

export default Ember.Service.extend({
  items: ["Bauer NME 7 Goalie Helmet"],

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  includes(item) {
    return this.get('items').includes(item);
  },
});
