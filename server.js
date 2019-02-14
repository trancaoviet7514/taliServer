const PORT = 3484;									
 
var http = require('http') 							
var socketio = require('socket.io')				
var ip = require('ip');
var app = http.createServer();					
var io = socketio(app);								
app.listen(process.env.PORT || PORT, function (req, res) {
    res.end();
});										
console.log("Server running...")
 
io.on('connection', function(socket) {	
    console.log("Connected"); 
	
    socket.emit('welcome', {
        message: 'Connected !!!!'
    });
	
    socket.on('connection', function(message) {
        console.log(message);
    });
});