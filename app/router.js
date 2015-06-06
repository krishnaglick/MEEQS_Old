import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('login', { path: '/login' });
    this.route('user', { path: '/user/:id' });
    this.route('user-edit', { path: '/user/:id/edit' });
    this.route('user-ratings', { path: '/user/:id/ratings' });
    this.route('user-favourites', { path: '/user/:id/favourites' });

    this.route('restaurants', { path: '/restaurants'});
    this.route('restaurant', { path: '/restaurant/:id'});
    this.route('restaurant-rate', { path: '/restaurant/:id/rate' });
});

export default Router;
