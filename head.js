const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

assertEqual(head([1,2,3]), 1);
assertEqual(head([2,4,5,6]), 2);
assertEqual(head([]), undefined);