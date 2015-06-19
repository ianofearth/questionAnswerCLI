import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  isEditing: false,
  actions: {
    back: function() {
      var question = this.get('controllers.question.model');
      this.transitionToRoute('question', question.id);
    },
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var answer = this.get('model');
      var question = this.get('controllers.question.model');
      answer.save();
    },
    deleteAnswer: function() {
      if(confirm('Are you sure you want to remove this Answer from the Question?')) {
        var answer = this.get('model');
        var question = this.get('controllers.question.model');
        question.get('answers').removeObject(answer);
        question.save();
        answer.destroyRecord();

        this.transitionToRoute('question', question.id);
      }
    }
  }
});
