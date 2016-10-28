import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('content', '');
      this.set('author', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
