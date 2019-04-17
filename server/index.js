var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').load();
var hostname = process.env.HOST || 'localhost';
var port = process.env.PORT || 8888;

// http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(), morgan(':method :url - :status - :res[content-length] :response-time ms'));

var routes = require('./api/routes/routes') //importing route
routes(app);

// Change the 404 message modifing the middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// Start the server in the port 8888 !
app.listen(port, function () {
    console.log('RESTful API server started on: ' + `http://${hostname}:${port}/` );
    console.log('Author: Phong Pham');
});

