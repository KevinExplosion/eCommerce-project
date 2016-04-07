import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('shopping-cart');
  this.route('store-item', {path: '/store-item/:store_item_id'});
  this.route('signin');
  this.route('sign-up');
  this.route('welcome');
});

export default Router;
