define('forum/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		question: _emberData.default.attr('string'),
		asked_by: _emberData.default.attr('string'),
		created_at: _emberData.default.attr('date'),
		inappropriate: _emberData.default.attr('number')
	});
});