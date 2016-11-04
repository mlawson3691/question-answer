import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  error: false,
  actions: {
    saveQuestion() {
      if (this.get('session').get('isLoggedIn')){
        var params = {
          content: this.get('content'),
          author: this.get('session').get('currentUser'),
          notes: this.get('notes'),
          date: moment()
        };
        if (params.content === undefined ||  params.notes === undefined) {
          this.set('error', true);
        } else {
          this.set('content', '');
          this.set('notes', '');
          this.set('author', '');
          this.set('error', false);
          this.sendAction('saveQuestion', params);
        }
      }
    }
  }
});
