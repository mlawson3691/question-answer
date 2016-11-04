import Ember from 'ember';

export default Ember.Component.extend({
  error: false,
  actions: {
    signUp() {
      if (this.get('newUsername') !== undefined && this.get('newUsername') !== "" && this.get('newPassword') !== undefined && this.get('newPassword') !== "") {
        var params = {
          username: this.get('newUsername'),
          password: this.get('newPassword')
        }
        this.set('newUsername', '');
        this.set('newPassword', '');
        this.sendAction('signUp', params);
        this.$('#signUpModal').modal('toggle');
        this.set('error', false);
      } else {
        this.set('error', true);
      }
    }
  }
});
