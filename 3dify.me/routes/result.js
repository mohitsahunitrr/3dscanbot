/*
 * GET the result of a schedule.
 */

//----------------------------------------------------------------------------------------------
// Module dependencies
//----------------------------------------------------------------------------------------------
var app = require('../app');
var pyfunc = require('../modules/pyfunc');
var queue = require('../modules/queue');

//##############################################################################################
//Display results of a reconstruction
//##############################################################################################
exports.display = function(req, res){
	console.log('display ' + req.params.jobID);
	// commenting out the main index page
  	res.render('result', {
	  	title: req.params.jobID,
	  	jobID: JSON.stringify(req.params.jobID)
  	});
  	queue.newJob(req.params.jobID);
};

//Joins a room
app.io.route('join', function(req) {
	console.log('client joined room ' + req.data);
    req.io.join(req.data);
    app.io.room(req.data).broadcast('something', 'something');
})

// Leaves a room
app.io.route('leave', function(req) {
    req.io.leave(req.data);
})


// broadcasts to a room
var broadcastResult = function(result) {
    // Get something then broadcasts it
	//app.io.room(result).broadcast('something', data);
}