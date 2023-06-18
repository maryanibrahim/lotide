/* eslint-disable func-names */
const middle = function (array) {
  const { length } = array;
  if (length <= 2) {
    return [];
  }

  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 1) {
    return [array[middleIndex]];
  }
  return [array[middleIndex - 1], array[middleIndex]];
};

module.exports = middle;
