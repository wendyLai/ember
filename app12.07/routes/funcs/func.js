import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param){
		var funcs=this.modelFor('funcs');
		var func=funcs.findBy('func_slug',param.func_slug);
		return func;
	}
	/*afterModel: function(){
		this.transitionTo('funcs.func.row');
	},*/
	
});
