import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      var params = {
        upvotes: answer.get('upvotes') + 1
      };
      this.sendAction('updateAnswer', answer, params);
    },
    downvote(answer) {
      var params = {
        downvotes: answer.get('downvotes') + 1
      };
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
