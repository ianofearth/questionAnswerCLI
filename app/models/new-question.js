import DS from 'ember-data';

export default DS.Model.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
