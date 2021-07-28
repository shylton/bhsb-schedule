import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

import Container from '@material-ui/core/Container'
import Week from './views/Week'
import Login from './views/Login'

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
        <Switch>
            <Route path='/login' component={Login} />
            <Week eventList={events}/>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
