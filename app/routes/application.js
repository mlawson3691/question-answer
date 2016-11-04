import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  showSignUp: true,
  actions: {
    signUp(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.get('session').set('currentUser', newUser);
      this.get('session').set('isLoggedIn', true);
    },
    logOut() {
      this.transitionTo('index');
    }
  }
});
