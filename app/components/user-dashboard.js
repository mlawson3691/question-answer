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
  answeredQuestions: Ember.computed('model.answers', function() {
    var output = [];
    this.get('user').get('answers').then(function(results) {
      results.forEach(function(answer) {
        output.addObject(answer.get('question'));
      });
    });
    return output;
  })
  // ,
  // sortedQuestions: Ember.computed.sort('answeredQuestions', 'sortDefinition'),
  // sortDefinition: ['date:desc'],
  // actions: {
  //   saveQuestion(params) {
  //     this.sendAction('saveQuestion', params);
  //   }
  // }
});
