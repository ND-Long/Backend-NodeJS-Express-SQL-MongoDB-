require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const initAPIRouter = require('./routes/api')
const connection = require('./config/database')

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true })); //for form data


//config template engine 
configViewEngine(app)

//declare routes
app.use('/', webRoutes)
app.use('/', initAPIRouter)



app.listen(port, hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
})



