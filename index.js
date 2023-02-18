const express = require('express')
const dotenv = require('dotenv')
const setMiddleware = require('./middlewares/middleware')
const setRoute = require('./routes/route')
const mongoose = require('mongoose')



const app = express()
dotenv.config()

setMiddleware(app)
setRoute(app)


const url = 'mongodb://localhost:27017/amazon'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connect success')
})

app.listen(2000, () => {
    console.log('server create success')
})