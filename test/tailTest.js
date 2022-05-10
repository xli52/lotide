const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns [2 , 4] for [1, 2, 4]", () => {
    assert.deepEqual(tail([1, 2, 4]), [2 , 4]);
  });
  it("returns [] for [2]", () => {
    assert.deepEqual(tail([2]), []);
  });
});