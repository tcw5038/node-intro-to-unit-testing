'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {
  it('should return fizz-buzz for multiples of 15', function(){
    const normalCases = [15, 30, 45, 60];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('should return buzz for multiples of 5', function(){
    const normalCases = [5, 10, 15, 20];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  it('should return fizz for multiples of 3', function(){
    const normalCases = [3, 6, 9, 12];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  it('should return the number if it is not a multiple of 5 or 3', function(){
    const normalCases = [1, 2, 4, 7];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it('should throw an error if it is not a number', function(){
    const abnormalInputs = [true, 'hello', [1, 2]];
    abnormalInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
  
});