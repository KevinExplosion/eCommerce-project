import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('store_item', params.store_item);
  },
});
