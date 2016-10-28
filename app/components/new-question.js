import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,

  actions: {
    newQuestion() {
      this.set('newQuestion', true);
    },
    cancelQuestion() {
      this.set('newQuestion', false);
    },
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('content', '');
      this.set('notes', '');
      this.set('author', '');
        this.set('newQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
