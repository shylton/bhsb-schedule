import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Monthly from './views/Monthly'
import Navbar from './components/Navbar'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const event = {
  id: '210711a',
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
}

function App() {
  return (
    <Router>
      <Navbar title='BHSB Schedule' icon='fa fa-calendar'/>
      <Container>
        <Box my={3}>
          <Monthly event={event} />
        </Box>
      </Container>
    </Router>
  )
}

export default App
