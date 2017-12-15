import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {};
	},
	actions: {
		submitQuestion: function(){
			const newQues = this.get('store').createRecord('question',this.currentModel);
			newQues.save().then((place) => {
				Materialize.toast('Question submitted successfully', 4000)
				this.transitionTo('index');
			});
		}
	}
});
