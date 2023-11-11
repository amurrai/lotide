const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const letterPositions = require('./letterPositions');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countLetters: countLetters,
  countOnly: countOnly,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  letterPositions: letterPositions
};