/* Copyright (c) 2014 Richard Rodger */
'use strict';

var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;

var test = require('seneca-transport-test');
var count1 = 0;
var count2 = 0;
var passme = function(fin, n) {
    return function(err) {
        if (n == 1) {
            count1++;
            console.log('COUNT1 ', count1);
        } else {
            count2++;
            console.log('COUNT2 ', count2);
        }
        if (err) {
            console.log('FIN PASSED ', err);
            console.error(err);
        }
        fin(err);
    };
};

describe('beanstalk-transport', function() {
it('happy-any', function(fin) {
    test.foo_test('', require, passme(fin, 1), 'beanstalk', -11300);
});

it('happy-pin', function(done) {
    test.foo_pintest('', require, passme(done, 2), 'beanstalk', -11300);
});
});
