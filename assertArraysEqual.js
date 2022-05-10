const eqArrays = require('./eqArrays.js').eqArrays;

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log('✅ Asssertion Passed: ', firstArray, ' === ', secondArray);
  } else {
    console.log('🛑 Assertion Failed: ', firstArray, ' !== ', secondArray);
  }
};

module.exports = assertArraysEqual;