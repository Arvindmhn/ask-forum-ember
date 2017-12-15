import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(params) {
		console.log(params);
		return RSVP.hash({
      		question: this.store.findRecord('question',params["qid"]),
      		answers: this.store.query('answer',{filter: {qid: params["qid"]}}),
      		newAnswer: {"qid": params["qid"], "upvotes": 0, "downvotes": 0}
    	});
	},
	actions: {
		addUpVotes: function(answer_id){
			this.store.findRecord('answer', answer_id).then(function(ansRecord){
				ansRecord.incrementProperty('upvotes');
				ansRecord.save();
				Materialize.toast('Answer upvoted!', 4000);
			})

		},
		addDownVotes: function(answer_id){
			this.store.findRecord('answer', answer_id).then(function(ansRecord){
				ansRecord.incrementProperty('downvotes');
				ansRecord.save();
				Materialize.toast('Answer downvoted!', 4000);
			})
		},
		submitAnswer: function(){
			console.log(this.currentModel.newAnswer);
			const newAns = this.get('store').createRecord('answer',this.currentModel.newAnswer);
			newAns.save().then((answer) => {
				Materialize.toast('Answer submitted successfully', 4000);
				this.refresh();
			});
		}

	}
});
