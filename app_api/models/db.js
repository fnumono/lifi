var mongoose = require('mongoose')

//define a database connection string
var dbURI = 'mongodb://localhost/nameoftheapp';
mongoose.connect(dbURI);

//monitored the mongoose connection events
mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('connected', function(err){
	console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected')
});

//monitor and close the mongoose connections
var gracefulShutdown = function (msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through' + msg);
		callback();
	});
};

//for nodemon restarts
process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});

//for app termination
process.on('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});

//for Heroku app termination
process.on('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown', function(){
		process.exit(0);
	});
});

require('./locations');
