
/*jslint browser: true, node: true */
/*global require, module, describe, it */

"use strict";

var assert = require("assert");
var fs = require('fs');

var daikon = require('../src/main.js');

var buf = fs.readFileSync('./tests/data/implicit_little.dcm');
var data = new DataView(daikon.Utils.toArrayBuffer(buf));

describe('Daikon', function () {
    describe('test implicit', function () {
        it('should not throw error', function () {
            assert.doesNotThrow(function() {
                var image = daikon.Series.parseImage(data);
            });
        });
    });
});
