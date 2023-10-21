const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let out = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        out = false;
      }
    }
    return out;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} === ${array2}`);
  }
};

const middle = function(array) {
  let mid = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      mid.push(array[(array.length / 2) - 1]);
      mid.push(array[array.length / 2]);
    } else {
      mid.push(array[(array.length - 1) / 2]);
    }
  }
  return mid;
}

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);