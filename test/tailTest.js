const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([1,2,4]).length, 2);