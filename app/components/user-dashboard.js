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
    var allAnsweredQuestions = [];
    var output = [];
    this.get('user').get('answers').then(function(results) {
      results.forEach(function(answer) {
        allAnsweredQuestions.addObject(answer.get('question'));
      });
      console.log(allAnsweredQuestions);
      allAnsweredQuestions.forEach(function(question) {
        if (!output.includes(question)) {
          output.addObject(question);
        }
      });
      return allAnsweredQuestions;
    });
  })
});
