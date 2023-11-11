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

module.exports = countLetters;