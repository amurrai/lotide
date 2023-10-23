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

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1);
assertEqual({a: 2, b: 3}, {a: 2, b: 3});
assertEqual({}, {a: 2});
assertEqual(2, {a: 2});
assertEqual([1], [1]);