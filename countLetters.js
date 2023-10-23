const assertEqual = function(actual, expected) {
  // Checking for objects
  if (typeof actual === 'object' && typeof expected === 'object') {
    // Getting keys for each object
    let actualKeys = Object.getOwnPropertyNames(actual);
    let expectedKeys = Object.getOwnPropertyNames(expected);
    // Checking for equal number of keys
    if (actualKeys.length !== expectedKeys.length) {
      console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
      return false;
    } else {
      // Iterating over properties to compare values
      for (const key of actualKeys) {
        if (!Object.prototype.hasOwnProperty.call(expected, key)) {
          console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
          return false;
        } else if (actual.key !== expected.key) {
          console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
          return false;
        }
      }
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
      return true;
    }

  } else {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
      return true;
    } else {
      console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
      return false;
    }
  }
};

const countLetters = function(str) {
  let result = {};
  for (const char of str) {
    if (char !== ' ') {
      if (result[char]) {
        result[char] ++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
assertEqual(countLetters("Ll iI Aa") , {L: 1, l: 1, i: 1, I: 1, A: 1, a: 1});