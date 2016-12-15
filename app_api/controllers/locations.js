var mongoose = require('mongoose');
var Loc = require('Location');

var sendJsonResponse = function (res,status, content)
{
	res.status(status);
	res.json(content);
};

module.exports.locationsCreate = function(req,res)
{
	sendJsonResponse(res, 200, {"status": "success"});
};

