const assertArraysEqual = function(firstArray, secondArray) {
  
  //Edge cases: check if two arrays have some amount of items and length are not zero.
  if (firstArray.length !== secondArray.length) {
    console.log(`🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
    return;
  }

  //Loop through all items in both array and compare each items with same index.
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      console.log(`🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
      return;
    }
  }
  
  console.log(`✅ Asssertion Passed: ${firstArray} === ${secondArray}`);
  
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,'3']);
assertArraysEqual([1,2,3],[1,2]);