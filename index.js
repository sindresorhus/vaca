'use strict';
const uniqueRandomArray = require('unique-random-array');
const cows = require('cows');

module.exports = uniqueRandomArray(cows());
