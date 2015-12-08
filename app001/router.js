import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('funcs', {}, function() {
    this.route('func', { path: ':slug' }, function() {
      this.route('settings', { path: ':slug1' });
    });
  });
});

export default Router;
