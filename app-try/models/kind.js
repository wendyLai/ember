import Ember from 'ember';

export default Ember.Object.extend({
	kind_id   : '',
	name      : '',
	kind_slug : Ember.computed('kind_id', function() {
		return this.get('kind_id').dasherize();
	})
});
