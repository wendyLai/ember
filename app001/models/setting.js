import Ember from 'ember';

export default Ember.Object.extend({
	name:'',
	slug1:Ember.computed('name', function() {
		return this.get('name').dasherize();
	})
});
