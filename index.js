'use strict';
var uniqueRandomArray = require('unique-random-array');
var cows = require('cows');

module.exports = uniqueRandomArray(cows());
