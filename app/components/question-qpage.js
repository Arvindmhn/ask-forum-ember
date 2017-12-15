import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		setInappropriate: function(questionId){
			var self = this;
			console.log(questionId);
			this.get('store').findRecord('question', questionId).then(function(quesRecord){
				if (quesRecord.get('inappropriate') >= 10){
					quesRecord.destroyRecord().then(() => {
						Materialize.toast('Question deleted due to feedback', 4000);
  						Ember.getOwner(self).lookup('router:main').transitionTo('index');
  					});
  				}
  				else{
  					quesRecord.incrementProperty('inappropriate');
  					quesRecord.save();
					Materialize.toast('Question marked as inappropriate! Will be taken down after review', 500);
				}
			})
		},
	}
});
