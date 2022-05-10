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

module.exports = without;