#!/usr/bin/env node
import meow from 'meow';
import indentString from 'indent-string';
import vaca from './main.js';

meow(`
	Usage
	  $ vaca
`, {
	importMeta: import.meta,
});

console.log('\n\n' + indentString(vaca(), 1, '\t') + '\n');
