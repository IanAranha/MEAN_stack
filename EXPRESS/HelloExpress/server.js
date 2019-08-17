const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'))
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.get('/', (request, response) => {
    response.send("HELLO EXPRESS")
});

app.get("/index", (req, res) => {
    // hard-coded user data
    res.render('index');
})

app.get("/users", (req, res) => {
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})

app.post('/users', (req, res) => {
    console.log(req.body) 
    res.redirect('/index')
});


app.listen(8000, ()=>console.log('Listening on port 8000'))