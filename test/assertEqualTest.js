const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1);
assertEqual({a: 2, b: 3}, {a: 2, b: 3});
assertEqual({}, {a: 2});
assertEqual(2, {a: 2});
assertEqual([1], [1]);