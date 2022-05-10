const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};

module.exports = tail;