const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').load();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(), morgan(':method :url - :status - :res[content-length] :response-time ms'));

let routes = require('./api/routes') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port);
console.log('Connected');
