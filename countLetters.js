const countLetters = function(sentence) {
  sentence = sentence.split(' ').join('');
  const results = {};
  for (const char of sentence) {
    if (results[char]) results[char]++;
    if (!results[char]) results[char] = 1;
  }
  return results;
};

module.exports = countLetters;

// const assertObjectEqual = function(actual, expected) {
//   let isEqual = true;
  
//   for (const key in actual) {
//     if (actual[key] !== expected[key]) {
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


// assertObjectEqual({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }, countLetters('lighthouse in the house'));
// assertObjectEqual({ l: 2, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }, countLetters('lighthouse in the house'));