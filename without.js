const without = function(source, itemsToRemove) {
  let trim = [];
  for (const item of source) {
    let unique = true;
    for (const compare of itemsToRemove) {
      if (item === compare) {
        unique = false;
      }
    }
    if (unique === true) {
      trim.push(item);
    }
  }
  return trim;
};

module.exports = without;