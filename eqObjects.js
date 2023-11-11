const eqObjects = function(actual, expected) {
  if (actual === expected) return true;
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) return false;
    for (let i in actual) {
      if (!eqObjects(actual[i], expected[i])) return false;
    }
    return true;
  }
  if (typeof actual === 'object' && typeof expected === 'object') {
    
    let actualKeys = Object.getOwnPropertyNames(actual);
    let expectedKeys = Object.getOwnPropertyNames(expected);
    if (actualKeys.length !== expectedKeys.length) return false;
    
    for (const key of actualKeys) {
      const actualVal = actual[key];
      const expectedVal = expected[key];
      if (typeof actualVal === 'object' && typeof expectedVal === 'object') {
        if (!eqObjects(actualVal, expectedVal)) return false;
      }
      else if (actual[key] !== expected[key]) return false;
    }
    return true;
  }
};


module.exports = eqObjects;