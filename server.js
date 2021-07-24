const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const path = require('path')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

connectDB()

app.use('/api/events', require('./routes/events'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.json({ msg: 'Welcome to the bhsb schedule!' })
    })
}

// fallback if all else fails
app.use(function (req, res, next) {
    console.log('@server.js: 404 error')
    res.status(404).send("404 ERROR. Sorry can't find that!")
})

app.listen(PORT, () => console.log(`@server.js: Server listening on port ${PORT}`))
