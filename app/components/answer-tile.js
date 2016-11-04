import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  notLoggedIn: false,
  alreadyVoted: false,
  actions: {
    upvote(answer) {
      if (this.get('session').isLoggedIn) {
        if (!answer.get('voters').includes(this.get('session').currentUser.get('username'))) {
          var voters = answer.get('voters').addObject(this.get('session').currentUser.get('username'));
          var params = {
            upvotes: answer.get('upvotes') + 1,
            voters: voters
          };
          this.set('alreadyVoted', false);
          this.set('notLoggedIn', false);
          this.sendAction('updateAnswer', answer, params);
        } else {
          this.set('alreadyVoted', true);
          this.set('notLoggedIn', false);
        }
      } else {
        this.set('notLoggedIn', true);
      }
    },
    downvote(answer) {
      if (this.get('session').isLoggedIn) {
        if (!answer.get('voters').includes(this.get('session').currentUser.get('username'))) {
          var voters = answer.get('voters').addObject(this.get('session').currentUser.get('username'));
          var params = {
            downvotes: answer.get('downvotes') + 1,
            voters: voters
          };
          this.set('alreadyVoted', false);
          this.set('notLoggedIn', false);
          this.sendAction('updateAnswer', answer, params);
        } else {
          this.set('alreadyVoted', true);
          this.set('notLoggedIn', false);
        }
      } else {
        this.set('notLoggedIn', true);
      }
    }
  }
});
