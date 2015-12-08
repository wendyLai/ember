import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var kinds=this.modelFor('funcs.func').get('kinds');
		var kind=kinds.findBy('kind_slug',param.kind_slug);
		return kind;
	},
	renderTemplate() {
		this.render({ outlet: 'id1' });
	}
});
