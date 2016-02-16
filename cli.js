#!/usr/bin/env node
'use strict';
var meow = require('meow');
var indentString = require('indent-string');
var vaca = require('./');

meow([
	'Usage',
	'  $ vaca'
]);

console.log('\n\n' + indentString(vaca(), '\t') + '\n');
