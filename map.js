const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    let out = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return out;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} === ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([1, 2, 3, 4], num => num * 2), [2, 4, 6, 8]);
assertArraysEqual(map(["8", "10"], num => num + " is a number"), ["8 is a number", "10 is a number"]);