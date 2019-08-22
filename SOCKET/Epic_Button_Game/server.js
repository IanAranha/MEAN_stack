var express = require('express')
var app = express();
var server = app.listen(3003, ()=>console.log("PORT 3003"));

app.use(express.static(__dirname+'/static'))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')

app.get('/', (req, res)=>{
    res.render('index')
})

const io = require('socket.io')(server)
io.on('connection', function(socket){
    console.log("Client connected....")
    socket.on('clicked', function(data){
        clickCounter++
        io.emit('buttonUpdate', clickCounter)
    });
})

var clickCounter = 0

