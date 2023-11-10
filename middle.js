const middle = function(array) {
  let mid = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      mid.push(array[Math.floor(array.length / 2) - 1]);
      mid.push(array[Math.floor(array.length / 2)]);
    } else {
      mid.push(array[Math.floor(array.length / 2)]);
    }
  }
  return mid;
};

module.exports = middle;