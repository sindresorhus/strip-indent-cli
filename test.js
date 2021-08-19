import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['fixture']);
	t.is(stdout, 'foo\nbar\n');
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: '  foo\n  bar'});
	t.is(stdout, 'foo\nbar');
});
