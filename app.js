var config   = require('./config');
var mysql	 = require('mysql').createConnection(config.database);
var express  = require('express');
var app      = express();


app.configure(function() {
	app.use(express.static(__dirname + '/public')); 		// set the static files location /public
	app.use(express.logger('dev')); 						// log every request to the console
	app.use(express.bodyParser()); 							// pull information from html in POST
	app.use(express.methodOverride()); 						// simulate DELETE and PUT
});

var dbQuery = function(query, res) {
	mysql.query(query, function(error, rows) {
		if (error) {
			res.json(500, error);
		} else {
			res.json(200, rows);
		}
	});
}

app.get('/api/quotes', function(req, res) {
	dbQuery("SELECT * FROM `quotes`", res);
});

app.post('/api/quotes', function(req, res) {
	var data = req.accepts("json");
	if (data === undefined)
		res.send(406);
	else {
		var query = "INSERT INTO `quotes`(`content`, `author`, `source`, `date_created`) VALUES (" + mysql.escape(data.content) + "," + mysql.escape(data.author) + "," + mysql.escape(data.source) + ",NOW())";
		dbQuery(query, res);
	}
});

app.get('/api/quote/:quote_id', function(req, res) {
	dbQuery("SELECT * FROM `quotes` WHERE `id`=" + mysql.escape(req.params["quote_id"]), res);
});

app.post('/api/quote/:quote_id', function(req, res) {
	var data = req.accepts("json");
	if (data === undefined)
		res.send(406);
	else {
		var query = "UPDATE `quotes` SET `content`=" + mysql.escape(data.content) + ",`author`=" + mysql.escape(data.author) + "`source`=" + mysql.escape(data.source) + " WHERE `id`=" + mysql.escape(req.params["quote_id"];
		dbQuery(query, res);
	}
});

app.delete('/api/quote/:quote_id', function(req, res) {
	dbQuery("DELETE * FROM `quotes` WHERE id=" + mysql.escape(req.params["quote_id"]), res);
});

app.listen(3000);
console.log("Quoto listening on port 3000");