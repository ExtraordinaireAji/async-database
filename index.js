const express = require('express');
const connectDB = require('./database/db')
require('dotenv').config()
const studentRoute = require('./routes/studentRoute')
const bodyparser = require('body-parser')
const app = express();
const port = process.env.PORT 


app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(studentRoute)


connectDB()





app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})