const assertEqual = function(actual, expected) {
  // Checking for objects
  if (typeof actual === 'object' && typeof expected === 'object') {
    // Getting keys for each object
    let actualKeys = Object.getOwnPropertyNames(actual);
    let expectedKeys = Object.getOwnPropertyNames(expected);
    // Checking for equal number of keys
    if (actualKeys.length !== expectedKeys.length) {
      console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
      return false;
    } else {
      // Iterating over properties to compare values
      for (const key of actualKeys) {
        if (!Object.prototype.hasOwnProperty.call(expected, key)) {
          console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
          return false;
        } else if (actual[key] !== expected[key]) {
          console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
          return false;
        }
      }
      console.log(`✅✅✅ Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
      return true;
    }

  } else {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
      return true;
    } else {
      console.log(`🛑🛑🛑 Assertion failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
      return false;
    }
  }
};

const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);