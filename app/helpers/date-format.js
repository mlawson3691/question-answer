import Ember from 'ember';

export function dateFormat(params) {
  var date = moment(params[0]);
  if (date.format('MMM DD, YYYY') === moment().format('MMM DD, YYYY')) {
    return date.fromNow();
  } else {
    return date.format('MMM DD, YYYY');
  }
}

export default Ember.Helper.helper(dateFormat);
