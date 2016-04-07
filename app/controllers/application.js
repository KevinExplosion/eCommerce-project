// app/controllers/application.js

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signOut() {
      this.get('session').close();
    }
  }
});
