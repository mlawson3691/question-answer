import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,

  actions: {
    editQuestion() {
      this.set('editQuestion', true);
    },
    cancelEdit() {
      this.set('editQuestion', false);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('editQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
