import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    actions: {
      delete(product) {
        if (confirm('Are you sure you want to delete this product?')) {
          this.sendAction('destroyProduct', product);
        }
      }
    }
  }
});
