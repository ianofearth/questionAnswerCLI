import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description'),
        timestamp: new Date
      });
      newQuestion.save();
      this.transitionToRoute('questions');
      this.setProperties({
        question: '',
        author: '',
        description: ''
      });
    }
  }
});
