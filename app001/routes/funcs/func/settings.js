import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var func = this.modelFor('funcs.func');
		return func.findBy('slug', params.slug);
	}
});