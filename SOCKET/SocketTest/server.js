const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
    console.log('This is the hit from Client to Server');
    socket.emit('greeting', { msg: ' From Server emit: Seding this back to the index file. ' }); //3
    socket.on('thankyou', function (data) { //7
    console.log("Triggered from index emit: ", data.msg); //8 (note: this log will be on your server's terminal)
});
    
});
