import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('funcs', {}, function() {
    this.route('func', { path: ':func_slug' }, function() {
      this.route('kind', { path: ':kind_slug' },function(){
        this.route('id1', {});
        this.route('id2', {});
        this.route('id3', {});
      });
      this.route('id1', {});
    });
  });
});

export default Router;
