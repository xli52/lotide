const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {
    if (sentence[index] !== ' ') {
      if (results[sentence[index]]) results[sentence[index]].push(Number(index));
      if (!results[sentence[index]]) results[sentence[index]] = [Number(index)];
    }
  }
  return results;
};

module.exports = letterPositions;

// const assertObjectEqual = function(actual, expected) {
//   let isEqual = true;
  
//   for (const key in actual) {
//     if (!assertArraysEqual(actual[key],expected[key])) {
//       isEqual = false;
//       break;
//     }
//   }

//   if (isEqual) {
//     console.log(`✅ Asssertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertArraysEqual = function(firstArray, secondArray) {
  
//   //Edge cases: check if two arrays have some amount of items and length are not zero.
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }

//   //Loop through all items in both array and compare each items with same index.
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       return false;
//     }
//   }
  
//   return true;
// };

// assertObjectEqual({
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }, letterPositions('lighthouse in the house'));