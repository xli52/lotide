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

module.exports = eqObjects;