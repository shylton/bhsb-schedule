/**
 * this route is used to store a new event in the database
 */

const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

/**
 * route: POST api/events
 * desc: add an event
 * access: Private
 */
router.post('/',
    async (req, res) => {
        const { name } = req.body
        try {
            let event = new Event({ name })
            await event.save()
        } catch (err) {
            console.error(`@events.js [ERROR]: ${err.message}`)
            res.status(500).send('Server Error') // status 500 = server error
        }
    }
)

/**
 * route: GET api/events
 * desc: retrieve all events (REFACTOR: limit past dates)
 * access: Public
 */
router.get('/',
    async (req, res) => {
        // query db for all events from start date
        try {
            const eventsList = await Event.find()
            res.json(eventsList)
        } catch (err) {
            console.error(`@routes/contacts.js GET: ${err.message}`)
            res.status(500).send('Server Error')
        }
    }
)

/**
 * route: POST api/events/batch
 * desc: adds a predefined batch of events ## DISABLE THIS IN PROD
 * access: Public
 */
const events = [
    {
        name: 'Tasting',
        guest_count: 6,
        start: new Date('2021-07-21T15:00:00'),
        end: new Date('2021-07-21T18:00:00'),
        notes: '',
        staff_needed: {
            managers: 1,
            captains: 1,
            bartenders: 0,
            runners: 0
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            bartenders: 0,
            runners: 0
        }
    },
    {
        name: 'Hudson River Trading',
        guest_count: 35,
        start: new Date('2021-07-22T17:00:00'),
        end: new Date('2021-07-22T22:00:00'),
        notes: 'corporate dinner',
        staff_needed: {
            managers: 1,
            captains: 3,
            bartenders: 2,
            runners: 2
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            bartenders: 2,
            runners: 3
        }
    },
    {
        name: 'Morano/Tobin',
        guest_count: 140,
        start: new Date('2021-07-23T17:00:00'),
        end: new Date('2021-07-23T22:30:00'),
        notes: 'Wedding',
        staff_needed: {
            managers: 1,
            captains: 5,
            bartenders: 4,
            runners: 8
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            bartenders: 3,
            runners: 6
        }
    },
    {
        name: 'Kemp/Scoon',
        guest_count: 160,
        start: new Date('2021-07-25T18:00:00'),
        end: new Date('2021-07-26T00:00:00'),
        notes: 'Jewish wedding',
        staff_needed: {
            managers: 1,
            captains: 4,
            runners: 8
        },
        staff_signedup: {
            managers: 1,
            captains: 4,
            runners: 8
        }
    },
    {
        name: 'Goldberg Wedding 3',
        guest_count: 150,
        start: new Date('2021-07-24T17:00:00'),
        end: new Date('2021-07-24T23:00:00'),
        notes: 'cool people at this jewish wedding',
        staff_needed: {
            managers: 1,
            captains: 4,
            runners: 10
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            runners: 8
        }
    },
    {
        name: 'Goldberg Wedding 4',
        guest_count: 21,
        start: new Date('2021-07-30T11:00:00'),
        end: new Date('2021-07-30T16:00:00'),
        notes: 'cool people at this jewish wedding',
        staff_needed: {
            managers: 1,
            captains: 1,
            runners: 5
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            runners: 3
        }
    },
    {
        name: 'Mary Lunch',
        guest_count: 10,
        start: new Date('2021-08-07T11:00:00'),
        end: new Date('2021-08-07T16:00:00'),
        notes: 'Arroz con poyo will be served',
        staff_needed: {
            managers: 1,
            captains: 1,
            runners: 5
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            runners: 5
        }
    },
    {
        name: 'Jane Dinner',
        guest_count: 30,
        start: new Date('2021-08-07T18:00:00'),
        end: new Date('2021-08-08T00:00:00'),
        notes: 'returning vip guest',
        staff_needed: {
            managers: 1,
            captains: 1,
            runners: 5
        },
        staff_signedup: {
            managers: 1,
            captains: 1,
            runners: 5
        }
    }
]

router.post('/batch',
    async (req, res) => {
        try {
            events.map(async e => {
                let event = new Event({ 
                    name: e.name,
                    guest_count: e.guest_count,
                    start: e.start,
                    end: e.end,
                    notes: e.notes,
                    staff_needed: e.staff_needed,
                    staff_signedup: e.staff_signedup
                 })
                await event.save()
            })
            res.send('batch success')
        } catch (err) {
            console.error(`@events.js [ERROR]: ${err.message}`)
            res.status(500).send('Server Error') // status 500 = server error
        }
    }
)

module.exports = router
