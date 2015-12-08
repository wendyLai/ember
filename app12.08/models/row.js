import Ember from 'ember';

export default Ember.Object.extend({
	num      : '',
	setupKinds  : Ember.on('init', function() {
		if (!this.get('kinds')) {
			this.set('kinds', []);
		}
	}),
	row_slug : Ember.computed('row_num', function() {
		return this.get('row_num').dasherize();
	})
});
