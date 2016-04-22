# strip-indent-cli [![Build Status](https://travis-ci.org/sindresorhus/strip-indent-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-indent-cli)

> Strip leading whitespace from each line in a string

The line with the least number of leading whitespace, ignoring empty lines, determines the number to remove.


## Install

```
$ npm install --global strip-indent-cli
```


## Usage

```
$ strip-indent --help

  Usage
    $ strip-indent <file>
    $ echo <string> | strip-indent

  Example
    $ echo '\tunicorn\n\t\tcake' | strip-indent
    unicorn
        cake
```


## Related

- [strip-indent](https://github.com/sindresorhus/strip-indent) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
