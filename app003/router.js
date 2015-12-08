import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('funcs', {}, function() {
    this.route('func', { path: ':func_slug' }, function() {
      this.route('row', { path: ':row_slug' }, function() {
        this.route('kind', { path: ':kind_slug' }, function() {});
      });
      this.route('1', {}, function() {
        this.route('1', {});
      });
      this.route('status', {});
      this.route('2', {});
      this.route('3', {});
    });
  });
});

export default Router;
