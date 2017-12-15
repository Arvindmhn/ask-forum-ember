import Ember from 'ember';

export default Ember.Route.extend({
	// beforeModel() {
	// 	this.replaceWith('questions');
	// }
	model() {
		return this.store.findAll('question');
	}
});
