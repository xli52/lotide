const findKeyByValue = function(showList, tvShow) {
  for (const index in showList) {
    if (showList[index] === tvShow) return index;
  }
  return undefined;
};

module.exports = findKeyByValue;

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Asssertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);