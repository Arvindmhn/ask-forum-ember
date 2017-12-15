define('forum/components/question-qpage', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		store: Ember.inject.service(),
		actions: {
			setInappropriate: function setInappropriate(questionId) {
				var self = this;
				console.log(questionId);
				this.get('store').findRecord('question', questionId).then(function (quesRecord) {
					if (quesRecord.get('inappropriate') >= 10) {
						quesRecord.destroyRecord().then(function () {
							Materialize.toast('Question deleted due to feedback', 4000);
							Ember.getOwner(self).lookup('router:main').transitionTo('index');
						});
					} else {
						quesRecord.incrementProperty('inappropriate');
						quesRecord.save();
						Materialize.toast('Question marked as inappropriate! Will be taken down after review', 500);
					}
				});
			}
		}
	});
});