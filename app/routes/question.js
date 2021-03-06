import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      var user = params.author;
      question.get('answers').addObject(newAnswer);
      user.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        user.save();
        return question.save();
      });
      this.transitionTo('question', question);
    },
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
    }
  }
});
