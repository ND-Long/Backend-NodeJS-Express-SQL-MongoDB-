const express = require('express');
const path = require('path');
require('dotenv').config();


//import express

const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config template engine 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//cosfig static files: image/css/js
app.use(express.static(__dirname + '/public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))

//khai báo route
app.get('/', (req, res) => {
    res.render('sample.ejs')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}-${hostname}`)
})