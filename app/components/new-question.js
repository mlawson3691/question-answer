import Ember from 'ember';

export default Ember.Component.extend({
  error: false,
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      if (params.content === undefined || params.author === undefined || params.notes === undefined) {
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
});
