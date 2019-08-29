//Import Dependencies

var express = require('express')
    bp = require('body-parser')
    mongoose = require('mongoose')
    path = require('path')
    port = 3000

//Create app
var app = express();

//Use body-parser to parse data sent via POST
app.use(bp.urlencoded({extended:true}))


//Set up the views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Connect to a DB
mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true })

//Create Schema/models for Mongoose
const MongooseSchema = new mongoose.Schema({
    name: {type: String},
    weight: Number,
    gender: String,
    color: String
}, {timestamps: true})

const Mongoose = mongoose.model('Mongoose', MongooseSchema)


//Routes

//Show all
app.get('/', (req, res) => {
    Mongoose.find()
            .then(data=>res.render('index', {all_mongooses: data}))
            .catch(err => console.log(err))
})


app.get('/new', (req, res)=>{
    res.render('new')
})

//Create
app.post('/create', (req, res) =>{
    Mongoose.create(req.body, (err, result) =>{
        if(err) {console.log(err)}
        res.redirect('/')
    })
})

//Find and Show One
app.get('/show/:id', (req, res)=>{
    Mongoose.findOne({_id:req.params.id})
        .then(data => res.render('show', {mongoose: data}))
        .catch(err => res.json(err))
})

//Find and Edit One
app.get('/edit/:id', (req, res)=>{
    Mongoose.findOne({_id:req.params.id})
        .then(data => res.render('edit', {mongoose: data}))
        .catch(err => res.json(err))
})

//Update One
app.post('/update/:id',(req, res)=>{
    Mongoose.updateOne({_id:req.params.id}, req.body)
            .then(res.redirect('/'))
            .catch(err => console.log(err))
})

//Delete One
app.get('/delete/:id', (req, res)=>{
    Mongoose.deleteOne({_id:req.params.id})
            .then(res.redirect('/'))
            .catch(err => console.log(err))
})

//Create server and run
app.listen(port, ()=>console.log('Listen: ', port))