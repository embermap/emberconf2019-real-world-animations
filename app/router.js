import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('show', { path: '/:component_name' }, function() {
    this.route('solution')
  });

  this.route('sandbox');
});

export default Router;
