import { get } from '@ember/object';

export function initialize(app) {
  // const ENV = app.resolveRegistration('config:environment');
  // const analytics = get(ENV, 'ember-cli-google.analytics');

  // if (analytics.version === 'v4') {
  //   app.inject('route', 'gtag', 'service:gtag');
  //   app.inject('controller', 'gtag', 'service:gtag');
  // } else {
  //   app.inject('route', 'analytics', 'service:g-analytics');
  //   app.inject('controller', 'analytics', 'service:g-analytics');
  // }
}

export default {
  initialize,
};
