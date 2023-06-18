/* eslint-disable no-plusplus */
/* eslint-disable func-names */
const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
  return array;
};
module.exports = takeUntil;
