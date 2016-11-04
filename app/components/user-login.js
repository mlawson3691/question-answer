import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  formError: false,
  loginError: false,
  actions: {
    authenticate() {
      var _this = this;
      var username = this.get('username');
      var password = this.get('password');
      if (username !== undefined && username !== "" && password !== undefined && password !== "") {
        this.get('session').authenticate(username, password).then(function(result) {
          if (result === true) {
            _this.set('username', '');
            _this.set('password', '');
            _this.$('#logInModal').modal('toggle');
            _this.set('formError', false);
            _this.set('loginError', false);
            console.log(_this.get('session').get('isLoggedIn'));
          } else {
            _this.set('loginError', true);
            _this.set('password', '');
          }
        });
      } else {
        _this.set('formError', true);
      }
    }
  }
});
