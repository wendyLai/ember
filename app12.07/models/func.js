import Ember from 'ember';

export default Ember.Object.extend({
	name      : '',
	setupRows  : Ember.on('init', function() {
		if (!this.get('rows')) {
			this.set('rows', []);
		}
	}),
	func_slug : Ember.computed('e_name', function() {
		return this.get('e_name').dasherize();
	})
});
