# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @maryan/lotide`

**Require it:**

`const _ = require('@maryan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: that compares two arrays, actual and expected for equality using the eqArrays function.
* `assertEqual(actual, expected)`: compares two values, actual and expected, for equality.
* `assertObjectsEqual(actual, expected)`: compares two values, actual and expected, for equality
* `countLetters(string)`: function that takes a string as input and counts the occurrences of each letter.
* `countOnly(allItems, itemsToCount)`: counts the occurrences of specific items in an array and returns the count as an object.
* `eqArrays(array1, array2)`: checks if two arrays are equal, accounting for nested arrays.
* `eqObjects(object1, object2)`: checks if two objects are equal, accounting for nested objects and arrays.
* `findKey(object, callback)`: searches for the first key in an object that satisfies a given condition defined by a callback function.
* `findKeyByValue(inputObject, valueToFind)`: finds the key associated with a specific value in an object.
* `flatten(arr)`: converts a nested array into a single-level array.
* `head(array)`: retrieves the first element of an array.
* `index`: list of all the functions in an object.
* `letterPositions(sentence)`: generates an object that stores the indices of each letter in a given sentence.
* `map(array, callback)`: creates a new array by transforming each element of the input array using a callback function.
* `middle(array)`: retrieves the middle element(s) of an array.
* `tail(array)`:  retrieves every element except the head (first element) of an array.
* `takeUntil(array, callback)`:returns a portion of the array until the callback condition is met.
* `without(source, itemsToRemove)`: creates a new array by removing specific items from the source array.