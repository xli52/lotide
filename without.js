const without = function (sourceArray, itemsToRemove) {
  const filteredArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let isToBeRemoved = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        isToBeRemoved = true;
      }
    }
    if (!isToBeRemoved) {
      filteredArray.push(sourceArray[i]);
    } 
  }

  return filteredArray;
}

const assertArraysEqual = function(firstArray, secondArray) {
  
  //Edge cases: check if two arrays have same amount of items and length are not zero.
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

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(['1','2','3'],[1,2,'3']),['1','2'])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);