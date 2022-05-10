const flatten = function(array) {
  const newArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      for (let nestedItem of item) {
        newArray.push(nestedItem);
      }
    } else {
      newArray.push(item);
    }
  }

  return newArray;
};

module.exports = flatten;

// const assertArraysEqual = function(firstArray, secondArray) {
  
//   //Edge cases: check if two arrays have some amount of items and length are not zero.
//   if (firstArray.length !== secondArray.length) {
//     console.log(`🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
//     return;
//   }

//   //Loop through all items in both array and compare each items with same index.
//   for (let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] !== secondArray[i]) {
//       console.log(`🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
//       return;
//     }
//   }
  
//   console.log(`✅ Asssertion Passed: ${firstArray} === ${secondArray}`);
  
// };

// assertArraysEqual(flatten([[1,2,3],[4,5,6]]),[1,2,3,4,5,6]);
// assertArraysEqual(flatten([['hello','my', 'name'],'is', 'Xiang']), ['hello', 'my','name','is','Xiang']);