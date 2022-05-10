const sortObjectArray = function(array) {
  array.sort((a ,b) => {
    if (a.name === b.name) return (b.age - a.age);
    return (a.name < b.name ? -1 : 1);
  });
  return array;
};

module.exports = sortObjectArray;