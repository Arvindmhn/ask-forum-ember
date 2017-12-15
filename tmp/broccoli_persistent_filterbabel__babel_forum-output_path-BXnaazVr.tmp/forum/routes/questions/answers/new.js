define("forum/routes/questions/answers/new", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model(params) {
			return { "qid": params["qid"] };
		},

		actions: {
			submitAnswer: function submitAnswer() {
				console.log(this.currentModel);
				// const newAns = this.get('store').createRecord('answer',this.currentModel);
				// newAns.save().then((place) => {
				// 	Materialize.toast('Answer submitted successfully', 4000)
				// });
			}
		}
	});
});