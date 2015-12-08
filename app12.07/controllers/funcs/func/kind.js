import Ember from 'ember';

export default Ember.Controller.extend({
	Id1: Ember.computed('model.id',function(){
		return 1==this.get('model.id');
	}),
	Id2: Ember.computed('model.id',function(){
		return 2==this.get('model.id');
	}),
	Id3: Ember.computed('model.id',function(){
		return 3==this.get('model.id');
	})
});
