import DS from 'ember-data';

export default DS.Model.extend({
  answerer: DS.attr('string'),
  answer: DS.attr('string'),

  question: DS.belongsTo('question', {async: true})

});
