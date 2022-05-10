const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe ('#eqObject', () => {
  it('should return true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }', () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('should return false for { a: { y: 0, z: 1 }, b: 2 } and { a: 1, b: 2 }', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
  it("should return true for { a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]], b: { c: ['abc', 123, null], d: [undefined, NaN] }}, {b: { c: ['abc', 123, null], d: [undefined, NaN] }, a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]]} ", () => {
    assert.isTrue(eqObjects({
      a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]],
      b: { c: ['abc', 123, null], d: [undefined, NaN] }
    }, {
      b: { c: ['abc', 123, null], d: [undefined, NaN] },
      a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]]
    }))
  });
})