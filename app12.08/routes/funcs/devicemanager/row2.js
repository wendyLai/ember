import Ember from 'ember';

export default Ember.Route.extend({
	model: function(param) {
		var rows=this.modelFor('funcs.devicemanager').get('rows');
		var row=rows.findBy('row_num','row2');
		//console.log(row);
		return row;
	},
	renderTemplate() {
		this.render({ outlet: 'row2' });
	}
});