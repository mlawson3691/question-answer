import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  editQuestion: false,
  error: null,
  isOwner: Ember.computed('session.isLoggedIn', function() {
    if (this.get('session').isCurrentUser(this.get('question').get('author').content)) {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    editQuestion() {
      this.set('editQuestion', true);
    },
    cancelEdit() {
      this.set('editQuestion', false);
    },
    update(question) {
      if (this.get('session').isCurrentUser(this.get('question').get('author').content)) {
        var params = {
          content: this.get('content'),
          notes: this.get('notes')
        };
        this.set('editQuestion', false);
        this.sendAction('update', question, params);
      } else {
        this.set('error', "You cannot edit someone else's question");
      }
    }
  }
});
