import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Week from './views/Week'

const events = [
  {
    name: 'Goldberg Wedding',
    guest_count: 21,
    start: new Date('2021-07-12T11:00:00'),
    end: new Date('2021-07-12T16:00:00'),
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
    name: 'Goldberg Wedding 2',
    guest_count: 2,
    start: new Date('2021-07-13T11:00:00'),
    end: new Date('2021-07-13T16:00:00'),
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
    name: 'Goldberg Wedding 3',
    guest_count: 210,
    start: new Date('2021-07-15T11:00:00'),
    end: new Date('2021-07-15T16:00:00'),
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
    name: 'Goldberg Wedding 4',
    guest_count: 21,
    start: new Date('2021-07-18T11:00:00'),
    end: new Date('2021-07-18T16:00:00'),
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
    name: 'Steph Wedding',
    guest_count: 21,
    start: new Date('2021-07-18T18:00:00'),
    end: new Date('2021-07-18T23:00:00'),
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
]

function App() {
  return (
    <Router>
      <Navbar title='BHSB Schedule' icon='fa fa-calendar' />
      <Container>
        <Box style={{ marginTop: 16, marginBottom: 16 }}>
          <Week eventList={events}/>
        </Box>
      </Container>
    </Router>
  )
}

export default App
