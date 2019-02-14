const PORT = 3484									
 
var http = require('http') 							
var socketio = require('socket.io')				
var ip = require('ip')
var app = http.createServer(function(req, res) {
    res.write("hello")
    res.end()
})					
var io = socketio(app)
app.listen(process.env.PORT || PORT)									
console.log("Server running...")
 
io.on('connection', function(socket) {	
    console.log("Connected")
	
    socket.emit('welcome', {
        data: 'welcome event'
    })
	
    socket.on('connection', function(message) {
        console.log(message)
    })

    socket.on('move', function(message) {
        console.log(message)
    })
})