#!/usr/bin/env node
import process from 'node:process';
import fs from 'node:fs';
import meow from 'meow';
import getStdin from 'get-stdin';
import stripIndent from 'strip-indent';

const cli = meow(`
	Usage
	  $ strip-indent <file>
	  $ echo <string> | strip-indent

	Example
	  $ echo '\\tunicorn\\n\\t\\tcake' | strip-indent
	  unicorn
	  \tcake
`, {
	importMeta: import.meta,
});

const input = cli.input[0];

function init(data) {
	console.log(stripIndent(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a filename');
	process.exit(1);
}

if (input) {
	init(fs.readFileSync(input, 'utf8'));
} else {
	(async () => {
		init(await getStdin());
	})();
}
