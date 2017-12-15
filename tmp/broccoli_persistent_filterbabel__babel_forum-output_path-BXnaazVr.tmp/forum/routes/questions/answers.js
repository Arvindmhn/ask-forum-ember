define('forum/routes/questions/answers', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var RSVP = Ember.RSVP;
	exports.default = Ember.Route.extend({
		model: function model(params) {
			console.log(params);
			return RSVP.hash({
				question: this.store.findRecord('question', params["qid"]),
				answers: this.store.query('answer', { filter: { qid: params["qid"] } }),
				newAnswer: { "qid": params["qid"], "upvotes": 0, "downvotes": 0 }
			});
		},

		actions: {
			addUpVotes: function addUpVotes(answer_id) {
				this.store.findRecord('answer', answer_id).then(function (ansRecord) {
					ansRecord.incrementProperty('upvotes');
					ansRecord.save();
					Materialize.toast('Answer upvoted!', 4000);
				});
			},
			addDownVotes: function addDownVotes(answer_id) {
				this.store.findRecord('answer', answer_id).then(function (ansRecord) {
					ansRecord.incrementProperty('downvotes');
					ansRecord.save();
					Materialize.toast('Answer downvoted!', 4000);
				});
			},
			submitAnswer: function submitAnswer() {
				var _this = this;

				console.log(this.currentModel.newAnswer);
				var newAns = this.get('store').createRecord('answer', this.currentModel.newAnswer);
				newAns.save().then(function (answer) {
					Materialize.toast('Answer submitted successfully', 4000);
					_this.refresh();
				});
			}

		}
	});
});