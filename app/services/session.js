import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  currentUser: null,
  isLoggedIn: false,
  isCurrentUser(user) {
    if (this.get('currentUser') === user) {
      return true;
    } else {
      return false;
    }
  },
  authenticate(username, password) {
    var _this = this;
    var success;
    return this.get('store').query('user', {
      orderBy: 'username',
      equalTo: username
    }).then(function(result) {
      if (result) {
        return result.get('firstObject');
      } else {
        return false;
      }
    }).then(function(foundUser) {
      if (foundUser && foundUser.get('password') == password) {
        _this.set('currentUser', foundUser);
        _this.set('isLoggedIn', true);
        return true;
      } else {
        return false;
      }
    });
  }
});
