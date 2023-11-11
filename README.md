# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amurrai/lotide`

**Require it:**

`const _ = require('@amurrai/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`function1(...)`: description
* `head(arr)`: returns the first element of an array 
* `tail(arr)`: returns all elements of an array except from the first
* `middle(arr)`: returns the middle index item of an array with an odd number of elements and the middle 2 items of an array with even number of items
* `flatten(arr)`: takes a 2 level array and returns a single level array with the same items 
* `map(arr, callback)`: returns an array of the results of the callback over each item in arr
* `takeUntil(arr, callback)`: returns an array of the callback over each item of arr
* `without(arr, itemsToRemove)`: returns an array without the items listed to be removed
* `findKey(obj, callback)`: returns the key of callback in obj
* `findKeyByValue(object, value)`: returns the key of value in obj 
* `countLetters(str)`: returns an object with keys for each letter in the string and the value of their respective counts
* `countOnly(arr1, arr2)`: returns an object with the items from arr2 as keys and the values equal to the counts of each item in arr1
* `assertArraysEqual(arr1, arr2)`: console.log the return of eqArrays
* `assertEqual(actual, expected)`: console.log assertion of comparison between actual and expected
* `assertObjectsEqual(actual, expected)`: deep comparison between objects actual and expected
* `eqArrays(arr1, arr2)`: shallow comparison between arrays arr1 and arr2
* `eqObjects`: 
* `letterPositions(str)`: takes a string and returns an object with a key for each letter and the value of all indexes of the letter occurence 