import Application from '@ember/application';
import { run } from '@ember/runloop';

import { initialize } from 'dummy/initializers/g-analytics-init';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | g analytics init', function (hooks) {
  hooks.beforeEach(function () {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  });

  hooks.afterEach(function () {
    destroyApp(this.application);
  });

  // Replace this with your real tests.
  test('it works', function (assert) {
    initialize(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
