import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('funcs', {}, function() {
    this.route('func', { path: ':func_slug' }, function() {});
    this.route('routestatus', function() {
      this.route('row1');
      this.route('row2');
      this.route('row3');
    });
    this.route('devicemanager', function() {
      this.route('row1', function() {
        this.route('kind1');
        this.route('kind2');
        this.route('kind3');
      });
      this.route('row2');
    });
  });
});

export default Router;
