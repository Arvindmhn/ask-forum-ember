define('forum/components/answer-home', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		store: Ember.inject.service(),
		actions: {
			addUp: function addUp(answer_id) {
				this.sendAction('upVotesClicked', answer_id);
			},
			addDown: function addDown(answer_id) {
				this.sendAction('downVotesClicked', answer_id);
			},
			isEdit: function isEdit(answer) {
				answer.toggleProperty('editor');
			},
			submitAnswer: function submitAnswer(answer) {
				var self = this;
				this.get('store').findRecord('answer', answer.id).then(function (ans) {
					ans.set('answwer', answer.answer);
					ans.save();
					answer.toggleProperty('editor');
				});
			}
		}
	});
});