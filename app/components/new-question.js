import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('content', '');
      this.set('notes', '');
      this.set('author', '');
      this.sendAction('saveQuestion', params);
    }
  }
});
