import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var kinds=this.modelFor('funcs.func.row').kinds;
		var kind=kinds.findBy('kind_slug',param.kind_slug);
		console.log('route的传入model',kind);
		return kind;
	}
});