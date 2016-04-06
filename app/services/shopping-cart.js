import Ember from 'ember';

export default Ember.Service.extend({

  items: [],
  totalPrice: Ember.computed('items.[]', function(){
    var items = this.get('items');
    console.log('computing');
    var totalPrice = 0;
    items.forEach(function(item) {
      totalPrice = totalPrice + parseInt(item.get('cost'));
    });
    return totalPrice;
  }),

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
