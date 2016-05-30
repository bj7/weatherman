import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
});

Router.map(function() {
  this.route('/');
  this.route('today');
  this.route('threeDay');
  this.route('week');
})

export default Router;
