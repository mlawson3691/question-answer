import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  error: null,
  notLoggedIn: false,
  alreadyVoted: false,
  isOwnAnswer: false,
  actions: {
    upvote(answer) {
      if (this.get('session').isLoggedIn) {
        if (answer.get('author').get('username') === this.get('session').currentUser.get('username')) {
          this.set('error', 'You may not vote for your own answer');
        } else if (!answer.get('voters').includes(this.get('session').currentUser.get('username'))) {
          var voters = answer.get('voters').addObject(this.get('session').currentUser.get('username'));
          var params = {
            upvotes: answer.get('upvotes') + 1,
            voters: voters
          };
          this.set('error', null);
          this.sendAction('updateAnswer', answer, params);
        } else {
          this.set('error', 'You already voted for this answer');
        }
      } else {
        this.set('error', 'You must be logged in to vote for an answer');
      }
    },
    downvote(answer) {
      if (this.get('session').isLoggedIn) {
        if (answer.get('author').get('username') === this.get('session').currentUser.get('username')) {
          this.set('error', 'You may not vote for your own answer');
        } else if (!answer.get('voters').includes(this.get('session').currentUser.get('username'))) {
          var voters = answer.get('voters').addObject(this.get('session').currentUser.get('username'));
          var params = {
            downvotes: answer.get('downvotes') + 1,
            voters: voters
          };
          this.set('error', null);
          this.sendAction('updateAnswer', answer, params);
        } else {
          this.set('error', 'You already voted for this answer');
        }
      } else {
        this.set('error', 'You must be logged in to vote for an answer');
      }
    }
  }
});
