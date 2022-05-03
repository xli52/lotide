const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  } else {
    return array.slice(1);
  }
};

assertEqual(tail([1,2,4]).length, 2);