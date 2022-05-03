const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅ Asssertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('🛑 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('apple', 'apple');
assertEqual(1, 1);
assertEqual(2, 3);