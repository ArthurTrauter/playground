(function() {
  'use strict';

  var assert = require('assert');

  // 14: destructuring - parameters
  // To do: make all tests pass, leave the assert lines unchanged!

  describe('destructuring function parameters', () => {

    describe('destruct parameters', () => {
      it('multiple params from object', () => {
        const fn = ({
          id
        }, {
          name
        }) => {
          assert.equal(id, 42);
          assert.equal(name, 'Wolfram');
        };
        console.log('hier');
        const user = {
          id: 42
        };
        const name = {
          name: 'Wolfram'
        };
        fn(user, name);
      });

      it('multiple params from array/object', () => {
        const fn = ([{
          name
        }]) => {
          assert.equal(name, 'Alice');
        };
        const users = [{
          name: 'Alice',
          id: 42
        }, {
          name: 'nobody'
        }];
        fn(users);
      });
    });

    describe('default values', () => {
      it('for simple values', () => {
        const fn = (id, name = 'Bobby') => {
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob');
        };
        fn(23, 'Bob');
      });

      it('for a missing array value', () => {
        const defaultUser = {
          id: 23,
          name: 'Joe'
        };
        const fn = ([user = defaultUser]) => {
          assert.deepEqual(user, defaultUser);
        };
        fn([]);
      });

      it('mix of parameter types', () => {
        const fn = (id = 1, [arr = 2], {
          obj = 3
        }) => {
          assert.equal(id, 1);
          assert.equal(arr, 2);
          assert.equal(obj, 3);
        };
        fn(void 0, [], {});
      });
    });

  });

}());
