const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index')
});


app.get('/contact', (req,res)=>{
    res.render('contact')
})


app.get('/inscription', (req,res)=>{
    res.render('inscription')
})

app.listen(8000,()=>{
    console.log('connecter au port 8000');
})