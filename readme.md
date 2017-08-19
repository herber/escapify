# escapify [![Build Status](https://travis-ci.org/tobihrbr/escapify.svg?branch=master)](https://travis-ci.org/tobihrbr/escapify) [![Codestyle fyi](https://img.shields.io/badge/code%20style-fyi-E91E63.svg)](https://github.com/tobihrbr/fyi)


> Escape html strings

## Install

```
$ npm install --save escapify
```

## Usage

```js
const escapify = require('escapify');

escapify.escape('<html string>');
//=> '&lt;html string&gt;'

escapify.unescape('&lt;html string&gt;');
//=> '<html string>'
```

## API

### escapify.escape(input)

#### input

Type: `string`

unescaped html string

### escapify.unescape(input)

#### input

Type: `string`

escaped html string

## License

MIT © [Tobias Herber](https://tobihrbr.com)
