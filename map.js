const map = function(array, callback) {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;