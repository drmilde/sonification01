var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.setHeader('Content-Type', 'application/json');
  
	request("http://localhost:9000/samples", function(error, response, body) {
		console.log(body);
		res.send(body);
	});
  
  
  
});

module.exports = router;
