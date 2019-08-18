const express = require('express')
const app = express();
const session = require('express-session')
const bp = require('body-parser')
const path = require('path')

app.use(bp.urlencoded({extended:true}))
app.use(express.static(__dirname + '/static'))
app.use(session({'secret': 'aaaaaaaaaaaaaaaaaaaaa'}))


app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) =>{
    if (!req.session.number){
        req.session.number=Math.floor(Math.random()*100+1)
    }

    if(!req.session.guess){
        var guess = 'None'
    }
    else if(req.session.guess < req.session.number){
        guess = 'Low'
    }
    else if(req.session.guess > req.session.number){
        guess = "High"
    }
    else if(req.session.guess == req.session.number){
        guess = 'Correct'
    }
    res.render('index', {status: guess})
})


app.post('/guess', (req, res) =>{
    req.session.guess = req.body.number;
    res.redirect('/');
})

app.post('/reset', (req, res)=>{
    req.session.number=Math.floor(Math.random()*100+1);
    req.session.guess=null;
    res.redirect('/');
})

app.listen(8000, ()=> console.log('Go to localhost/8000'))