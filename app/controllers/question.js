import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var question = this.get('model');
      question.save();
    },
    delete: function() {
      if(confirm('Are you sure you want to remove this Question?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
