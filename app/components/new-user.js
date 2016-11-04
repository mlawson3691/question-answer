import Ember from 'ember';

export default Ember.Component.extend({
  error: false,
  actions: {
    signUp() {
      if (this.get('username') !== undefined && this.get('username') !== "" && this.get('password') !== undefined && this.get('password') !== "") {
        var params = {
          username: this.get('username'),
          password: this.get('password')
        }
        this.set('username', '');
        this.set('password', '');
        this.sendAction('signUp', params);
        this.$('#signUpModal').modal('toggle');
        this.set('error', false);
      } else {
        this.set('error', true);
      }
    }
  }
});
