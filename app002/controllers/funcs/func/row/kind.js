import Ember from 'ember';

export default Ember.Controller.extend({
	match_id:'1',
	id1: Ember.computed('match_id','model.id',function(){
		return this.get('match_id')==this.get('model.id');
	})
});
