import test from 'ava';
import vaca from './main.js';

test('main', t => {
	const cow = vaca();
	t.is(typeof cow, 'string');
	t.true(cow.length > 0);
});
