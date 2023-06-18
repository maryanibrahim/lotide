/* eslint-disable no-console */
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅  Success: Assertion Passed: ✅ ✅ : ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Failure: Assertion Failed: ❌❌ ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
