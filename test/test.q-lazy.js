'use strict';

var Q = require('q');
require('../index');

describe('Q.lazy(fn)', function () {
    it('should return promise', function () {
        Q.isPromise(Q.lazy()).should.be.true;
    });

    it('should call `fn` only when .then() is called', function () {
        var called = false;

        var promise = Q.lazy(function () {
            called = true;
        });
        called.should.be.false;

        promise.then(function () {});
        called.should.be.true;
    });

    it('should call `fn` only once', function () {
        var called = false;

        var promise = Q.lazy(function () {
            called.should.be.false;
            called = true;
        });

        promise.then(function () {});
        promise.then(function () {});
        promise.then(function () {});
    });

    it('should resolve promise using `fn`', function () {
        var ret = {};

        return Q.lazy(function () {
            return Q(ret);
        })
        .then(function (r) {
            r.should.equal(ret);
        });
    });

    it('should support plain values returned by `fn`', function () {
        var ret = {};

        return Q.lazy(function () {
            return ret;
        })
        .then(function (r) {
            r.should.equal(ret);
        });
    });
});
