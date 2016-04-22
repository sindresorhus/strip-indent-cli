import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const ret = await execa('./cli.js', ['fixture'], {cwd: __dirname});
	t.is(ret.stdout, 'foo\nbar\n');
});

test('stdin', async t => {
	const ret = await execa.shell('echo "  foo\\n  bar" | ./cli.js', {cwd: __dirname});
	t.is(ret.stdout, 'foo\nbar\n');
});
