import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var rows=this.modelFor('funcs.routestatus').get('rows');
		var row=rows.findBy('row_num','row3');
		//console.log(row);
		return row;
	},
	renderTemplate() {
		this.render({ outlet: 'row3' });
	}
});