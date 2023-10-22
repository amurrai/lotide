const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  for (const char of str) {
    if (char !== ' ') {
      if (result[char]){
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