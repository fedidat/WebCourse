const chai = require('chai'),
	chaiHttp = require('chai-http'),
	mocha = require('mocha'),
	sinon = require('sinon'),
	Calculator = require('../calculator');
	SuperCalculator = require('../superCalculator'),
	assert = chai.assert;

chai.should();

describe('super calculator test', () => {
	describe('pow function', () => {
		it('should return 8 for 2 pow 3', (done) => {
			const calc = new Calculator();
			const result = calc.multiply(2, 4);
			result.should.equal(8);
			done();
		});

		it('should call calculator multiply 3 times', (done) => {
			const calcStub = {};
			calcStub.multiply = sinon.spy();
			const superCalc = new SuperCalculator();
			superCalc.calc = calcStub;
			superCalc.pow(2, 3);
			calcStub.multiply.callCount.should.equal(2);
			done();
		});

		it('should return value form calc', (done) => {
			const calcStub = {};
			calcStub.multiply = sinon.stub();
			calcStub.multiply.withArgs(2, 2).returns(4);
			calcStub.multiply.withArgs(4, 2).returns(8);
			const superCalc = new SuperCalculator();
			superCalc.calc = calcStub;
			const result = superCalc.pow(2, 3);
			result.should.equal(8);
			done();
		});

		it('should call calulator with right params', (done) => {
			const calcStub = {};
			calcStub.multiply = sinon.stub();
			calcStub.multiply.withArgs(2, 2).returns(4);
			const superCalc = new SuperCalculator();
			superCalc.calc = calcStub;
			superCalc.pow(2, 3);
			calcStub.multiply.firstCall.calledWith(2, 2).should.equal(true);
			calcStub.multiply.secondCall.calledWith(4, 2).should.equal(true);
			done();
		});
	});
});
