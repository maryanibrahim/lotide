/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const findKeyByValue = function (inputObject, valueToFind) {
  for (const key in inputObject) {
    if (inputObject[key] === valueToFind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
