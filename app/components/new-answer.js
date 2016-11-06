import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  error: false,
  actions: {
    saveAnswer(question) {
      if (this.get('session').get('isLoggedIn')){
        var params = {
          contents: this.get('contents'),
          author: this.get('session').get('currentUser'),
          question: this.get('question'),
          upvotes: 0,
          downvotes: 0,
          voters: [this.get('session').get('currentUser').get('username')],
          date: moment()
        };
        console.log(params.voters);
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
