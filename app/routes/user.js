import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      var user = params.author;
      user.get('questions').addObject(newQuestion);
      newQuestion.save().then(function() {
        return user.save();
      });
      this.transitionTo('question', newQuestion);
    }
  }
});
