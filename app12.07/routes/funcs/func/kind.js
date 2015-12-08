import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var kinds=this.modelFor('funcs.func').get('kinds');
		var kind=kinds.findBy('kind_slug',param.kind_slug);
		//console.log('route的传入model',kind);
		//console.log('param',param);
		return kind;
	},
	afterModel:function(param) {
		this.transitionTo('funcs.func.kind.id'+param.id+'');
	}
});
