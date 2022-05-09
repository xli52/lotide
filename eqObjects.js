const isPrimitive = function(test) {
  return test !== Object(test);
};

const eqObjects = function(object1, object2) {

  //Check if object1 and object2 are primitive type (string, number, boolean, null, undefined, NaN)
  if (isPrimitive(object1)) {
    //Check if both are NaN (since NaN === NaN is false)
    if (Number.isNaN(object1) && Number.isNaN(object2)) return true;

    //Now object1 must be a string, number, boolean, null or undefined
    if (object1 !== object2) return false;
    return true;
  }
  
  //If object1 and object2 are arrays, compare two arrays
  if (Array.isArray(object1)) {
    if (!Array.isArray(object2)) return false;
    if (object1.length !== object2.length) return false;
    for (const index in object1) {
      if (!eqObjects(object1[index], object2[index])) return false;
    }
    return true;
  }
  
  //At this point, object1 is an object. So we need to compare two objects
  //Check if two objects has same number of keys
  // console.log('object1: ',object1, 'is a object with ' , Object.keys(object1).length, ' keys');
  // console.log('object2: ',object2, 'is a object with ', Object.keys(object2).length, ' keys');
  // console.log('*******************');
  
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  
  //Loop through all keys in object1
  for (const key in object1) {
    //Check if key exist in object2
    if (!object2[key] && object2[key] !== undefined) {
      console.log(object2[key], 'is cause false.');
      return false;
    }
    //Compare object1 and object2 resursively
    if (!eqObjects(object1[key], object2[key])) return false;
  }

  return true;
};

//Testing...
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
// console.log(eqObjects('a', 'a')); // => true
// console.log(eqObjects([1,2,3], [1,2,3])); // => true
// console.log(eqObjects([1,2,3], [1,3,2])); // => false
// console.log(eqObjects([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []])); //=> true

//The SUPER test 1:
console.log('The SUPER test 1:');
console.log(eqObjects({
  a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]],
  b: { c: ['abc', 123, null], d: [undefined, NaN] }
}, {
  b: { c: ['abc', 123, null], d: [undefined, NaN] },
  a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]]
}
)); //=> true

//The SUPER test 2:
console.log('The SUPER test 2:');
console.log(eqObjects({
  a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]],
  b: { c: ['abc', 123, null], d: [undefined, NaN] },
  e: [1, 2]
}, {
  b: { c: ['abc', 123, null], d: [undefined, NaN] },
  e: [2, 1],
  a: [[[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]]
}
)); //=> true
