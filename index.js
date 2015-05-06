// index.js
var WaitLine = require('./waitline.js');

var waitline = new WaitLine();
waitline.simulate(300, 0.4, 6);

waitline.display();