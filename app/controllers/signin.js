import Ember from 'ember';

export default Ember.Controller.extend({
  isSignInShowing: true,
  actions: {
    signIn(provider) {
      this.set('isSignInShowing', false);
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
      }, (error) => {
        console.log(error);
      });
    }
  }
});
