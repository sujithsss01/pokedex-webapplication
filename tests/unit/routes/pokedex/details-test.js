import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pokedex/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pokedex/details');
    assert.ok(route);
  });
});
