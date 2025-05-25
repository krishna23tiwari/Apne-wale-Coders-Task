require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const path = require('path');
const port  = process.env.PORT
const fileupload = require('express-fileupload')



app.use(fileupload())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(express.json())

MongoUrl = process.env.MongoUrl

mongoose.connect(MongoUrl)
.then(() => console.log("connected"))
.catch(() => console.log("not connected"))

const usermodel = require('./Router/UserRouter')
const booking = require('./Router/BookingRouter')

app.use('/user', usermodel)
app.use('/booking-slot', booking)

app.listen(port, () => {
    console.log(`${port} is connected`)
})