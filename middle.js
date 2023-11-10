const middle = function(array) {
  let mid = [];
  let midIndex = Math.floor(array.length / 2);
  
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      mid.push(array[midIndex - 1]);
      mid.push(array[midIndex]);
    } else {
      mid.push(array[midIndex]);
    }
  }
  return mid;
};

module.exports = middle;