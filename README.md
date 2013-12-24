# Q.lazy()

<a href="http://promises-aplus.github.com/promises-spec">
    <img src="http://promises-aplus.github.com/promises-spec/assets/logo-small.png"
         align="right" alt="Promises/A+ logo" />
</a>

*Resolves promises idly.*

[![Build Status](https://travis-ci.org/nailgun/node-q-lazy.png?branch=master)](https://travis-ci.org/nailgun/node-q-lazy)
[![NPM version](https://badge.fury.io/js/q-lazy.png)](http://badge.fury.io/js/q-lazy)

```npm install q-lazy```

## About

It's a simple plugin for [Q](https://github.com/kriskowal/q) allowing you to create lazy
promises. Such promises start to resolve only after calling `.then()` on them.

## Usage

```js
var Q = require('q');
require('q-lazy'); // extends Q

function heavyFunc () {
    // ...
    return ret; // the return value can be a promise or a plain value
}

var promise = Q.lazy(heavyFunc); // doesn't execute heavyFunc

promise.then(function (ret) {    // executes heavyFunc
    // use ret
});
```

For specification take a look at provided [testsuite](test/test.q-lazy.js). It's short.
