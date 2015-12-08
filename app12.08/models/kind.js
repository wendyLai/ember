import Ember from 'ember';

export default Ember.Object.extend({
	id        : '',
	name      : '',
	kind_slug : Ember.computed('id', function() {
		return this.get('id').dasherize();
	})
});
