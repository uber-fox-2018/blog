require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

let database = process.env.DATABASE
if(process.env.NODE_ENV === 'test') {
    database = process.env.DATABASE_TEST
}
mongoose.connect(database, { useNewUrlParser: true })

// router 
const ArticleRoute = require('./routes/ArticleRoute')
const UserRoute = require('./routes/UserRoute')

app.use('/api/articles', ArticleRoute)
app.use('/api/auth', UserRoute)


// handle error
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
    next(error)
})

app.get('/', function(req, res) {
    res.send('testtt')
})

app.listen(3000)