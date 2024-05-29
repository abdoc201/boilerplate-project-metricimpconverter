const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
const { init } = require('../server.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('read a whole number input',()=>{
        assert.equal(convertHandler.getNum('5L'),5)
    })
    test('read a decimal number input',()=>{
        assert.equal(convertHandler.getNum('2.3gal'),2.3)
    })
    test('read a fractional input',()=>{
        assert.equal(convertHandler.getNum('5/2kg'),2.5)
    })
    test('read a fractional input with a decimal',()=>{
        assert.equal(convertHandler.getNum('5.2/1mi'),5.2)
    })
    test('return an error on a double-fraction',()=>{
        assert.equal(convertHandler.getNum('3/2/3'),'invalid number')
    })
    test('default numerical input of 1 when no numerical input is provided',()=>{
        assert.equal(convertHandler.getNum('L'),1)
    })



});