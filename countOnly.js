/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅  Success: Assertion Passed: ✅ ✅ : ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Failure: Assertion Failed: ❌❌ ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  ' Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result = countOnly(firstNames, {
  Jason: true, Karima: true, Fang: true, Agouhanna: false,
});

assertEqual(result.Jason, 1);
assertEqual(result.Karima, undefined);
assertEqual(result.Fang, 2);
assertEqual(result.Agouhanna, undefined);

// module.exports = countOnly;
