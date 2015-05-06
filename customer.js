var Customer = function(clock, transactionTime, customerId) {
	this.clock = clock;
	this.transactionTime = transactionTime;
	this.customerId = customerId;
}

module.exports = Customer;