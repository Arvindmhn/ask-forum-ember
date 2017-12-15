import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		addUp:function(answer_id){
			this.sendAction('upVotesClicked', answer_id);
		},
		addDown: function(answer_id){
			this.sendAction('downVotesClicked', answer_id);
		},
		isEdit: function(answer){
			answer.toggleProperty('editor');
		},
		submitAnswer: function(answer){
			var self = this;
			this.get('store').findRecord('answer', answer.id).then(function(ans) {
			  ans.set('answwer', answer.answer);
			  ans.save();
			  answer.toggleProperty('editor');
			});
		}
	}
});
