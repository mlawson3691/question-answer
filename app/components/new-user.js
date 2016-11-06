import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  error: false,
  duplicateError: false,
  actions: {
    signUp() {
      var _this = this;
      this.get('store').query('user', {
        orderBy: 'username',
        equalTo: this.get('newUsername')
      }).then(function(result) {
        if (result.content[0]) {
          _this.set('duplicateError', true);
        } else {
          _this.set('duplicateError', false);
        }
      }).then(function() {
        if (_this.get('newUsername') !== undefined && _this.get('newUsername') !== "" && _this.get('newPassword') !== undefined && _this.get('newPassword') !== "") {
          if (!_this.get('duplicateError')) {
            var params = {
              username: _this.get('newUsername'),
              password: _this.get('newPassword')
            };
            _this.sendAction('signUp', params);
            _this.$('#signUpModal').modal('toggle');
          }
          _this.set('newUsername', '');
          _this.set('newPassword', '');
          _this.set('error', false);
        } else {
          _this.set('error', true);
        }
      });
    }
  }
});
