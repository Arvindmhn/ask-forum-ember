import DS from 'ember-data';

export default DS.Model.extend({
	question: DS.attr('string'),
	asked_by: DS.attr('string'),
	created_at: DS.attr('date'),
	inappropriate: DS.attr('number')
});
