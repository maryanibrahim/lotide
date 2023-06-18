/* eslint-disable no-undef */
const { assert } = require('chai');
const tail = require('../tail');

// eslint-disable-next-line no-undef
describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    const result = tail([1, 2, 3]);
    assert.deepEqual(result, [2, 3]);
  });

  it("returns [] for ['5']", () => {
    const result = tail(['5']);
    assert.deepEqual(result, []);
  });
});
