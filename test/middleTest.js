const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [] for an empty array []", () => {
    assert.deepEqual(middle([]), []); 
  });

  it("returns [] for an array with 1 element ['a']", () => {
    assert.deepEqual(middle(['a']), []); 
  });

  it("returns [] for an array with 2 elements [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
});
