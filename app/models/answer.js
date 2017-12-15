import DS from 'ember-data';

export default DS.Model.extend({
	qid: DS.attr('number'),
	answer: DS.attr('string'),
	created_at: DS.attr('date'),
	upvotes: DS.attr('number'),
	downvotes: DS.attr('number')
});
