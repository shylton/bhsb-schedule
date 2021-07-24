const mongoose = require('mongoose')
const dbURI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('@config/db.js: mongoDB connected')
    } catch (err) {
        console.error('@config/db.js: [ERROR] => ' + err.message)
        process.exit(1)
    }
}

module.exports = connectDB
