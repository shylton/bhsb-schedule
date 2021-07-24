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
    staff_needed: {
        managers: Number,
        captains: Number,
        bartenders: Number,
        expos: Number,
        runners: Number,
    },
    staff_signedup: {
        managers: Number,
        captains: Number,
        bartenders: Number,
        expos: Number,
        runners: Number,
    }
})

module.exports = mongoose.model('events', EventSchema)
