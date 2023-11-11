const flatten = function(source) {
  let flat = [];
  for (const item of source) {
    if (Array.isArray(item)) {
      for (const elem of item) {
        flat.push(elem);
      }
    } else {
      flat.push(item);
    }
  }
  return flat;
};

module.exports = flatten;