import test from 'ava';
import m from './';

test(t => {
	const cow = m();
	t.is(typeof cow, 'string');
	t.true(cow.length > 0);
});
