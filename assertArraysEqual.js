const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("🛑🛑🛑 Assertion failed: Array1 !== Array2");
  } else {
    let out = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        out = false;
      }
    }
    if (out === true) {
      console.log("✅✅✅ Assertion passed: Array1 === Array2");
    } else {
      console.log("🛑🛑🛑 Assertion failed: Array1 !== Array2");
    }
  }
};