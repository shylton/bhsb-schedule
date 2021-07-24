const express = require('express')
const connectDB = require('./config/db')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

connectDB()

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the bhsb schedule!' })
})

app.use('/api/events', require('./routes/events'))

app.use(function (req, res, next) {
    console.log('@server.js: 404 error')
    res.status(404).send("404 ERROR. Sorry can't find that!")
})

app.listen(PORT, () => console.log(`@server.js: Server listening on port ${PORT}`))
