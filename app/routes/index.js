import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
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
