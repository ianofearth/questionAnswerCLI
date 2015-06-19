import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      // var currentdate = new Date();
      // var datetime = "Last Sync: " + currentdate.getDay() + "/"+currentdate.getMonth() + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

      var answer = this.store.createRecord('answer', {
        answerer: this.get('answerer'),
        answer: this.get('answer'),
        timestamp: new Date
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();
      this.setProperties({
        answerer: '',
        answer: ''
      });

      this.transitionToRoute('questions');
    }
  }
});
