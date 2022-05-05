const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅ Asssertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const eqObjects = function(object1, object2) {

  //Check if two objects has same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  
  //Loop through all keys in object1 to find if there is same key and value pair in object2.
  for (const key in object1) {
    //Check if key exist in object2
    if (!object2[key]) return false;
    //If value of key is an array, compare two arrays
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    }
    //If it's no an array, compare them directly
    if (!Array.isArray(object1[key])) {
      if (object2[key] !== object1[key]) return false;
    }
  }

  return true;
};

const eqArrays = function(firstArray, secondArray) {
  //Edge cases: check if two arrays have some amount of items and length are not zero.
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  //Loop through all items in both array and compare each items with same index.
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

//Testing...
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const acb = { a: "1", c: "2", b: "3" };
const abd = { a: "1", b: "2", d: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(acb, abc); // => false
assertObjectsEqual(abc, abd); // => false
assertObjectsEqual(cd, dc); // => true
assertObjectsEqual(cd, cd2); // => false