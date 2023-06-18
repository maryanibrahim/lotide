/* eslint-disable no-console */
/* eslint-disable func-names */
const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅  Success: Assertion Passed: ✅ ✅ "${actual}" === "${expected}"`);
  } else {
    console.log(`❌❌ Failure: Assertion Failed: ❌❌  "${actual}" !== "${expected}"`);
  }
};

module.exports = assertArraysEqual;
