import {Foo} from '../4-testing/simple';
import chai from 'chai';
var expect = chai.expect;

describe('simple.js test with chai', function() {
  describe('foo test', function() {
    it('getIt should return what the class is constructed with', function() {
      expect(new Foo('a').getIt()).to.equal('a');
    });
  });
});