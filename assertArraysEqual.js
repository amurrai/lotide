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
    console.log("✅✅✅ Assertion passed");
  } else {
    console.log("🛑🛑🛑 Assertion failed");
  }
};