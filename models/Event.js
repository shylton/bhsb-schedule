const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    // mongoose auto generates the '_id' required property
    name: {
        type: String,
        required: true
    },
    guest_count: {
        type: Number,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
    managers_needed: Number,
    managers_signedup: Number,
    bartenders_needed: Number,
    bartenders_signedup: Number,
    captains_needed: Number,
    captains_signedup: Number,
    runners_needed: Number,
    runners_signedup: Number,
})

module.exports = mongoose.model('events', EventSchema)
