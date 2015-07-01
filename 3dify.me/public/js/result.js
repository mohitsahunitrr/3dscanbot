/**
 * New node file
 */

var io;

//Initialization
$(function () {
	connect();
	join('jobwatch');
	listen('currentjob', updateStatus);
});

function updateStatus(data) {
	if (jobid > data) { // Finished
		leave('jobwatch');
		// Do rendering
	} else if (jobid == data) { // Ongoing
		leave('jobwatch');
		join('jobname');
		listen('progress', updateProgress);
	} else if (jobid < data){ // In queue
		// Display place in queue
	}
}

function updateProgress(data) {
	alert(data);
}

function connect() {
	io = io.connect();
}

// Join room
function join(room) {
	io.emit('join', room);
}

// Leave room
function leave(room) {
	io.emit('leave', room);
} 

// Listen for event and provides callback
function listen(event, callback) {
	io.on(event, function(data) {
	    callback(data);
	})
}

// Stop listening for event
function stop(event, callback) {
	io.removeListener(event, callback);
}