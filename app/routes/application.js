import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signUp(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
    }
  }
});
