import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Week from './views/Week'

function App() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    axios.get('/api/events').then(res => {
      console.log(res.data)
      setEvents(res.data)
    })
    console.log(events)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
