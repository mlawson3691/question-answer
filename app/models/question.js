import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  date: DS.attr(),

  answerCount: Ember.computed('answers', function() {
    return this.get('answers').toArray().length;
  })
});
