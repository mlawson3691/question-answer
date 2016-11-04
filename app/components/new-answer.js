import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  error: false,
  actions: {
    saveAnswer(question) {
      if (this.get('session').get('isLoggedIn')){
        var params = {
          content: this.get('content'),
          author: this.get('session').get('currentUser'),
          question: this.get('question'),
          upvotes: 0,
          downvotes: 0,
          date: moment()
        };
        if (params.content === undefined) {
          this.set('error', true);
        } else {
          this.set('content', '');
          this.set('author', '');
          this.set('error', false);
          this.sendAction('saveAnswer', params);
        }
      }
    }
  }
});
