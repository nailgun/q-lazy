'use strict';

var Q = require('q');

if (!Q.lazy) {
    Q.lazy = function (fn) {
        var deferred = Q.defer(),
            promise = deferred.promise,
            initiated = false;

        var then = promise.then;
        promise.then = function () {
            if (!initiated) {
                Q(fn()).then(deferred.resolve, deferred.reject, deferred.notify);
                initiated = true;
            }

            return then.apply(promise, arguments);
        };

        return promise;
    };
}
