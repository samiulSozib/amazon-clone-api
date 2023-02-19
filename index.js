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

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log('Database connect success')
// })

mongoose.connect(`mongodb+srv://amazon-clone-api:amazon-clone-api@cluster0.uycy3.mongodb.net/amazon-clone-api?retryWrites=true&w=majority&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connect success')

    }).catch(e => {
        return console.log(e)
    })


app.listen(2000, () => {
    console.log('server create success')
})