//Imports
var express = require('express')
var bp = require('body-parser')
var path = require('path')
var flash = require('express-flash')
var mongoose = require('mongoose')
var port = 3010
var moment = require('moment')
var app = express()
var session = require('express-session')


//Configuration
app.use(express.static(__dirname+'/static'))
app.use(flash())
// Set up body-parser to parse form data
app.use(bp.urlencoded({extended: true}))
//
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

//Views
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')


//Database
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true});

//create schema
const QuotesSchema = new mongoose.Schema({
    user: {type: String, required: true},
    quote: {type: String, required:true},
}, {timestamps:true})

//create object which interacts with MongoDB and server
const Quote = mongoose.model("Quote", QuotesSchema)



//Routes

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/quotes', (req, res) => {
    Quote.find()
        .sort( { createdAt : -1 } )
        .then(data => res.render('quotes', {all_quotes: data, moment: moment}))
        .catch(err => console.log(err))
})

app.post('/quotes', (req, res) => {
    //Create a new quote from input data
    const quote = new Quote();
    quote.user = req.body.user;
    quote.quote = req.body.quote;
    quote.save()
        .then(newQuoteCreated => console.log('New Quote created', newQuoteCreated))
        .catch(err => console.log(err))
    res.redirect('/quotes')
})

//Start server
app.listen(port, ()=>console.log("PORT", port))