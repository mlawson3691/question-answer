import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.belongsTo('user', { async: true }),
  question: DS.belongsTo('question', { async: true }),
  score: DS.attr()
});
