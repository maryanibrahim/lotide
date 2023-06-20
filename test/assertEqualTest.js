const assertEqual = require('../assertEqual');

// TEST CODE
// Comparing identical strings
assertEqual('Hello', 'Hello');

// Comparing non-identical strings
assertEqual('Lighthouse Labs', 'Bootcamp');

// Comparing identical numbers
assertEqual(42, 42);

// Comparing non-identical numbers
assertEqual(1, 2);
