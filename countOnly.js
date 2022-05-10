const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const index in itemsToCount) {
    if (itemsToCount[index]) {
      let count = 0;
      for (const item of allItems) {
        if (item === index) count++;
      }
      if (count > 0) results[index] = count;
    }
  }
  return results;
};

module.exports = countOnly;

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Asssertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);