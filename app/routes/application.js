import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    signUp(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    },
    logOut() {
      this.transitionTo('index');
    }
  }
});
