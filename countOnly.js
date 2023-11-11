const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const item of allItems) {
    if (item in itemsToCount && itemsToCount[item]) {
      if (results[item]) {
        results[item] ++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;