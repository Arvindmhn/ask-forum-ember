define('forum/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		qid: _emberData.default.attr('number'),
		answer: _emberData.default.attr('string'),
		created_at: _emberData.default.attr('date'),
		upvotes: _emberData.default.attr('number'),
		downvotes: _emberData.default.attr('number')
	});
});