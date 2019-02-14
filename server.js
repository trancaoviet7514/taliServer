const PORT = 3484;									
 
var http = require('http') 							
var socketio = require('socket.io')				
var ip = require('ip');
var app = http.createServer();					
var io = socketio(app);								
app.listen(process.env.PORT || PORT);										
console.log("Server running...")
 
function ParseJson(jsondata) {
    try {
        return JSON.parse(jsondata);
    } catch (error) {
        return null;
    }
}
 
function sendTime() {
	
	var json = {
        ESP8266: 12,									
		soPi: 3.14,										
		time: new Date()							
    }
    io.sockets.emit('atime', json);
}
 
io.on('connection', function(socket) {	
    console.log("Connected"); 
	
    socket.emit('welcome', {
        message: 'Connected !!!!'
    });
	
    socket.on('connection', function(message) {
        console.log(message);
    });
	
    socket.on('atime', function(data) {
        sendTime();
        console.log(data);
    });
	
	socket.on('arduino', function (data) {
	  io.sockets.emit('arduino', { message: 'R0' });
      console.log(data);
    });
});