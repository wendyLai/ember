import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param){
		var funcs=this.modelFor('funcs');
		var func=funcs.findBy('e_name','routestatus');
		//console.log(func);
		return func;
	}
});
