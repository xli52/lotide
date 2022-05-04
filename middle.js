const middle = function(array) {
  if (array.length <= 2) return [];
  if (array.length % 2 === 0) return [array[array.length / 2 - 1],array[array.length / 2]];
  return [array[Math.floor(array.length / 2)]];
};


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

assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArraysEqual(middle([1,2]),[]);