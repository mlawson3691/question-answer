import Ember from 'ember';

export default Ember.Component.extend({
  sortedQuestions: Ember.computed.sort('questions', 'sortDefinition'),
  sortDefinition: ['date:desc']
});
