import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var kinds=this.modelFor('funcs.devicemanager.row1').get('kinds');
		var kind=kinds.findBy('id','4');
		//console.log(kind);
		return kind;
	}
});