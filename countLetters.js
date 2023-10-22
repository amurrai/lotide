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
console.log(countLetters("LLLIIIllliii AAAaaa ~~~ []986653"));