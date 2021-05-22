const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();


require('./database/db')


const txnRouter = require('./api/v1/router/Transaction')
const userRouter = require('./api/v1/router/User')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: false }))

app.use('/transaction', txnRouter)
app.use('/User', userRouter)
app.listen(3300, () => {
    console.log("server is running")
})