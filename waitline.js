var Customer = require('./customer.js');

var WaitLine = function() {
	this.line = [];
	this.numberOfArrivals = 0;
	this.numberServed = 0;
	this.totalTimeWaited = 0;
};

WaitLine.prototype.simulate = function(duration, arrivalProbability, maxTransactionTime) {
  console.log("Enter simulate of WaitLine!");
  var transactionTimeLeft = 0;
  for (var clock = 0; clock < duration; clock++) {
  	var rand = Math.random();
  	// console.log("random number: " + rand);
  	if(rand < arrivalProbability) {
  		this.numberOfArrivals++;
  		var transactionTime = Math.floor(Math.random() * maxTransactionTime) + 1;
  		var customer = new Customer(clock, transactionTime, this.numberOfArrivals);
  		this.line.push(customer);
  		console.log("Customer " + this.numberOfArrivals + " enters line at time " + clock
  		            + ". Transaction time is " + transactionTime);
  	}

  	if(transactionTimeLeft > 0) transactionTimeLeft--;
  	else if(this.line.length > 0) {
  		var customer = this.line.shift();
  		console.log("Customer " + customer.customerId + " start to be served at time " + clock
  		            + ". Transaction time is " + customer.transactionTime);
  		transactionTimeLeft = customer.transactionTime - 1;
  		var timeWaited = clock - customer.clock;
  		this.totalTimeWaited = this.totalTimeWaited + timeWaited;
  		this.numberServed++;
  	}
  };
};

WaitLine.prototype.display = function() {
	console.log("\n");
	console.log("Number Served = " + this.numberServed);
	console.log("Total time waited = " + this.totalTimeWaited);
	var averageTimeWaited = this.totalTimeWaited / this.numberServed;
	console.log("Average time waited = " + averageTimeWaited);
	var leftInLine = this.numberOfArrivals - this.numberServed;
	console.log("Number left in line = " + leftInLine);
};

module.exports = WaitLine;