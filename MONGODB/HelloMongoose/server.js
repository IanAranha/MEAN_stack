//Imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bp = require('body-parser');


//Configuration
app.use(express.static(__dirname+'/static'))
app.use(express.urlencoded({extended:true}))
app.use(bp.urlencoded({useNewUrlParser:true}))


//Views
app.set('view engine', 'ejs')
app.set('views', __dirname+"/views")

//Database
mongoose.connect('mongodb://localhost/basic_mongoose');
//Create Schema for Users
const UserSchema = new mongoose.Schema({
    name: {type:String},
    age: {type:Number},
}, {timestamps:true})
//Constructor function for each object and store in variable "User"
const User = mongoose.model('User', UserSchema)


//Routes
app.get('/', (req, res)=>{
    //Find all users
    // User.find()
    //     .then(data => res.render('index', {users: data}))
    //     .catch(err => res.json(err))
    
    //Find one specific user
    User.find({name: 'Ian'})
        .then(data => res.render('index', {users: data}))
        .catch(err => res.json(err))

    //Find user based on criterea
    // User.find({age: {$lte: 30 }})
    //     .then(data => res.render('index', {users: data}))
    //     .catch(err => res.json(err))

    // User.find({age: {$gte: 30 }})
    //     .then(data => res.render('index', {users: data}))
    //     .catch(err => res.json(err))

    // User.findOne({name: "Ian"})
    //     .then(data => res.render('index', {users: data}))
    //     .catch(err => res.json(err))
})


app.post('/users', (req, res)=>{
    //Create a new user
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
    res.redirect('/')
})

app.listen(3005, ()=>console.log("Port 3005"))