const calculator = require('./calculator');

module.exports = class SuperCalculator {

	constructor() {
		this.calc = new calculator();
	}

	pow(a, b) {
		let result = a;
		for (let i = 1; i < b; i++) {
			result = this.calc.multiply(result, a);
		}
		return result;
	}
}