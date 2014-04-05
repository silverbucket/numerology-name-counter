if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}
define(['require'], function (require) {
  var suites = [];

  suites.push({
    desc: 'Numerology Name Counter',
    setup: function (env, test) {
      env.nnc = require('./../src/nnc');
      test.done();
    },
    tests: [
      {
        desc: '#nnc.hebrew - hello',
        run: function (env, test) {
          var total = env.nnc.hebrew('hello');
          test.assert(total, 52);
        }
      },
      {
        desc: '#nnc.hebrew - cat',
        run: function (env, test) {
          var total = env.nnc.hebrew('cat');
          test.assert(total, 24);
        }
      },
      {
        desc: '#nnc.hebrew - supercalafragalisticexpialadoshus',
        run: function (env, test) {
          var total = env.nnc.hebrew('supercalafragalisticexpialadoshus');
          test.assert(total, 355);
        }
      }
    ]
  });
  return suites;
});