import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param){
		var funcs=this.modelFor('funcs');
		var func=funcs.findBy('e_name','devicemanager');
		//console.log(func);
		return func;
	}/*,
	afterModel: function(){
		this.transitionTo('funcs.devicemanager.row1');
	}*/
});
