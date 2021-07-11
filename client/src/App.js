import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import EventSummary from './components/EventSummary'

const event = {
  id: '210711a',
  date: new Date('2021-07-11'),
  name: 'jewish wedding 1',
  guest_count: 21,
  event_start: 11,
  event_end: 15,
  notes: 'cool people at this wedding',
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
    <Container>
      <Typography variant='h4'>
        BHSB Schedule
      </Typography>
      <Grid container>
        {[1,2,3,4,5,6,7].map((e) =>
          <EventSummary event={event}></EventSummary>
        )}
      </Grid>
    </Container>
  )
}

export default App
