/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
const findKey = function (object, callback) {
  for (const key in object) {
    if (callback(object[key])) return key;
  }
};

module.exports = findKey;
