import Ember from 'ember';

export default Ember.Object.extend({
	length:'',
	slug:Ember.computed('length', function() {
		return this.get('length').dasherize();
	})
});