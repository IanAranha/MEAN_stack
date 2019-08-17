const express = require('express')
const app = express()


app.use(express.static(__dirname+'/static'))
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views', __dirname+'/views')

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/result', (req, res)=>{
    console.log(req.body)
    context={'data': req.body}
    res.render('result', context)
})

app.post('/goback', (req, res)=>{
    res.redirect('/')
})

app.listen(8000, ()=>console.log("Listening on port 8000"))