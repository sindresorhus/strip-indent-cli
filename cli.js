#!/usr/bin/env node
'use strict';
const fs = require('fs');
const meow = require('meow');
const getStdin = require('get-stdin');
const stripIndent = require('strip-indent');

const cli = meow(`
	Usage
	  $ strip-indent <file>
	  $ echo <string> | strip-indent

	Example
	  $ echo '\\tunicorn\\n\\t\\tcake' | strip-indent
	  unicorn
	  \tcake
`);

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
	getStdin().then(init);
}
