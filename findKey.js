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

const findKey = function (obj, callback) {
  for (let i in obj) {
    if (callback(obj[i])) return i;
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "A": 10,
  "B": 5,
  "C": 3,
  "D": 2   
}, x => x < 5), "C");

assertEqual(findKey({}, undefined));