/**
 * this route is used to store a new event in the database
 */

const express = require('express')
const router = express.Router()
const config = require('config')
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
            console.log('New event posted to db');
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
            manager: 1,
            captain: 1,
            bartender: 0,
            runner: 0
        },
        staff_signedup: {
            manager: 1,
            captain: 1,
            bartender: 0,
            runner: 0
        }
    },
    {
        name: 'Hudson River Trading',
        guest_count: 35,
        start: new Date('2021-07-22T17:00:00'),
        end: new Date('2021-07-22T22:00:00'),
        notes: 'corporate dinner',
        staff_needed: {
            manager: 1,
            captain: 3,
            bartender: 2,
            runner: 2
        },
        staff_signedup: {
            manager: 1,
            captain: 1,
            bartender: 2,
            runner: 3
        }
    },
    {
        name: 'Morano/Tobin',
        guest_count: 140,
        start: new Date('2021-07-23T17:00:00'),
        end: new Date('2021-07-23T22:30:00'),
        notes: 'Wedding',
        staff_needed: {
            manager: 1,
            captain: 5,
            bartender: 4,
            runner: 8
        },
        staff_signedup: {
            manager: 1,
            captain: 1,
            bartender: 3,
            runner: 6
        }
    },
    {
        name: 'Kemp/Scoon',
        guest_count: 160,
        start: new Date('2021-07-25T18:00:00'),
        end: new Date('2021-07-26T00:00:00'),
        notes: 'Jewish wedding',
        staff_needed: {
            manager: 1,
            captain: 4,
            runner: 8
        },
        staff_signedup: {
            manager: 1,
            captain: 4,
            runner: 8
        }
    },
    {
        name: 'Goldberg Wedding 3',
        guest_count: 150,
        start: new Date('2021-07-24T17:00:00'),
        end: new Date('2021-07-24T23:00:00'),
        notes: 'cool people at this jewish wedding',
        staff_needed: {
            manager: 1,
            captain: 4,
            runner: 10
        },
        staff_signedup: {
            manager: 1,
            captain: 1,
            runner: 8
        }
    },
    {
        name: 'Goldberg Wedding 4',
        guest_count: 21,
        start: new Date('2021-07-30T11:00:00'),
        end: new Date('2021-07-30T16:00:00'),
        notes: 'cool people at this jewish wedding',
        staff_needed: {
            manager: 1,
            captain: 1,
            runner: 5
        },
        staff_signedup: {
            manager: 1,
            captain: 1,
            runner: 3
        }
    },
    {
        name: 'Mary Wedding',
        guest_count: 10,
        start: new Date('2021-08-07T18:00:00'),
        end: new Date('2021-08-08T00:00:00'),
        notes: 'cool people at this Christian wedding',
        staff_needed: {
            manager: 1,
            captain: 1,
            runner: 5
        },
        staff_signedup: {
            manager: 1,
            captain: 1,
            runner: 5
        }
    },
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
                    managers_needed: e.staff_needed.manager,
                    managers_signedup: e.staff_signedup.manager,
                    captains_needed: e.staff_needed.captain,
                    captains_signedup: e.staff_signedup.captain,
                    runners_needed: e.staff_needed.runner,
                    runners_signedup: e.staff_signedup.runner,
                 })
                await event.save()
                console.log('New event posted to db')
            })
            res.send('success')
        } catch (err) {
            console.error(`@events.js [ERROR]: ${err.message}`)
            res.status(500).send('Server Error') // status 500 = server error
        }
    }
)

module.exports = router
