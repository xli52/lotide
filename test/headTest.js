const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([1,2,3]), 1);
assertEqual(head([2,4,5,6]), 2);
assertEqual(head([]), undefined); 