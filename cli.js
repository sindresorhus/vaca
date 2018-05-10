#!/usr/bin/env node
'use strict';
const meow = require('meow');
const indentString = require('indent-string');
const vaca = require('.');

meow([
	'Usage',
	'  $ vaca'
]);

console.log('\n\n' + indentString(vaca(), '\t') + '\n');
