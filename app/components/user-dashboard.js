import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  isOwner: Ember.computed('session.isLoggedIn', function() {
    if (this.get('session').isCurrentUser(this.get('user'))) {
      return true;
    } else {
      return false;
    }
  }),
  answeredQuestions: Ember.computed('user.answers', function() {
    var output = [];
    this.get('user').get('answers').then(function(answers) {
      answers.forEach(function(answer) {
        output.addObject(answer.get('question'));
      });
    });
    return output;
  }),
  uniqueQuestions: Ember.computed('answeredQuestions.[]', function() {
    var output = [];
    this.get('answeredQuestions').forEach(function(question) {
      var found = false;
      output.forEach(function(displayedQuestion) {
        if (question.content.id === displayedQuestion.content.id) {
          found = true;
        }
      });
      if (found === false) {
        output.addObject(question);
      }
    });
    return output;
  })
});
