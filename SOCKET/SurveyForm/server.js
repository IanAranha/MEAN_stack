const express = require('express')
const app = express();
const server = app.listen(8000, ()=>console.log('Port 8000'));
const io = require('socket.io')(server);

app.use(express.static(__dirname+'/static'))
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')


app.get('/', (req, res)=>{
    res.render('index')
})

io.sockets.on('connection', function(socket){
    socket.on('posting_form', function(data){
        console.log("Generating Random number now.")
        const random_number = Math.floor((Math.random() * 1000) + 1);
        console.log(random_number)
        socket.emit('updated_message', {response: data} )
        socket.emit('random_number',  {response: random_number})
    })
    socket.emit('updated message', )
})
