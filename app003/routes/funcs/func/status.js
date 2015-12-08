import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var rows=this.modelFor('funcs.func').rows;
		var row=rows.findBy('row_slug',param.row_slug);
		return row;
	}, 
	renderTemplate() {
		this.render({ outlet:"status" });
	}
	/*
	afterModel: function(){
		this.transitionTo('funcs.func.row.kind');
	}*/
});