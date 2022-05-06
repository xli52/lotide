const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
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

const result1 = map(words, word => word[0]);

assertArraysEqual(result1, ["g", "c", "t", "m", "t"])