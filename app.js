var express  = require('express');
var app      = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 		// set the static files location /public
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});


app.listen(3000);
console.log("Quoto listening on port 3000");