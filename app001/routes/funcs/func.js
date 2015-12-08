import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var funcs = this.modelFor('funcs');
		return funcs.findBy('slug', params.slug);
	}/*,
	afterModel: function() {
		this.transitionTo('funcs.func.setting',params.slug);
	}*/
});