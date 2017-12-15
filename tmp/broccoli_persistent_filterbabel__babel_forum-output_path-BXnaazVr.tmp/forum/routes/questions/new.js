define('forum/routes/questions/new', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			return {};
		},

		actions: {
			submitQuestion: function submitQuestion() {
				var _this = this;

				var newQues = this.get('store').createRecord('question', this.currentModel);
				newQues.save().then(function (place) {
					Materialize.toast('Question submitted successfully', 4000);
					_this.transitionTo('index');
				});
			}
		}
	});
});