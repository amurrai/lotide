const findKey = function (obj, callback) {
  for (let i in obj) {
    if (callback(obj[i])) return i;
  }
};

module.exports = findKey;