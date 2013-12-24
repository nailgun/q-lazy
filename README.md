# Q.lazy()
*Resolves promises idly.*

[![Build Status](https://travis-ci.org/nailgun/node-q-lazy.png?branch=master)](https://travis-ci.org/nailgun/node-q-lazy)

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
    return ret; // return value can be promise or plain value
}

var promise = Q.lazy(heavyFunc); // doesn't executes heavyFunc

promise.then(function (ret) { // executes heavyFunc
    // use ret
});
```

For specification take a look at provided [testsuite](test/test.q-lazy.js). It's short.
