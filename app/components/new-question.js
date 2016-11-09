import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  error: false,
  actions: {
    saveQuestion() {
      console.log('success');
      if (this.get('session').get('isLoggedIn')){
        var params = {
          contents: this.get('contents'),
          author: this.get('session').get('currentUser'),
          notes: this.get('notes'),
          date: moment()
        };
        if (params.contents === undefined || params.contents === '' ||  params.notes === undefined || params.notes === '') {
          this.set('error', true);
        } else {
          this.set('contents', '');
          this.set('notes', '');
          this.set('author', '');
          this.set('error', false);
          this.sendAction('saveQuestion', params);
        }
      }
    }
  }
});
