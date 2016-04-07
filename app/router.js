import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('store');
  this.route('shopping-cart');
  this.route('store-item', {path: '/store-item/:product_id'});
  this.route('signin');
  this.route('sign-up');
  this.route('welcome');
  this.route('signed-out');
});

export default Router;
