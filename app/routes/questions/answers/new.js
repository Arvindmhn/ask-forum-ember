import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return {"qid": params["qid"]};
	},
	actions: {
		submitAnswer: function(){
			console.log(this.currentModel);
			// const newAns = this.get('store').createRecord('answer',this.currentModel);
			// newAns.save().then((place) => {
			// 	Materialize.toast('Answer submitted successfully', 4000)
			// });
		}
	}
});
