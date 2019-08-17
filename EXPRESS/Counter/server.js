const express = require('express')
const app = express();
const session = require('express-session')


app.use(express.static(__dirname + '/static'))
app.use(express.urlencoded({extended: true}))
app.use(session({secret:'countersession'}));


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


session['counter'] = 1

app.get('/', (req, res) => {
    res.render('index', {counter: session['counter']} )
})

app.post('/add', (req, res) =>{
    session['counter']+=1
    res.redirect('/')
})

app.post('/addtwo', (req, res) =>{
    session['counter']+=2
    res.redirect('/')
})

app.post('/clear', (req, res) =>{
    session['counter']=1
    res.redirect('/')
})


app.listen(8000, ()=>console.log('Listening on port 8000'))