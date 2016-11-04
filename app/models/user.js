import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  questions: DS.hasMany('question', {async:true}),
  answers: DS.hasMany('answer', {async:true})
});
