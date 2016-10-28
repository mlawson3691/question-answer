import Ember from 'ember';

export default Ember.Component.extend({
  error: false,
  actions: {
    saveAnswer(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question')
      };
      if (params.content === undefined || params.author === undefined) {
        this.set('error', true);
      } else {
        this.set('content', '');
        this.set('author', '');
        this.set('error', false);
        this.sendAction('saveAnswer', params);
      }
    }
  }
});
