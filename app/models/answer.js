import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.belongsTo('user', { async: true }),
  question: DS.belongsTo('question', { async: true }),
  upvotes: DS.attr(),
  downvotes: DS.attr(),
  date: DS.attr('string'),

  score: Ember.computed('upvotes', 'downvotes', function() {
    console.log(this.get('upvotes') + ', ' + this.get('downvotes'));
    return this.get('upvotes') - this.get('downvotes');
  })
});
