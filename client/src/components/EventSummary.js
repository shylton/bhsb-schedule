import React from 'react'
import format from 'date-fns/format'
import isFuture from 'date-fns/isFuture'
import isToday from 'date-fns/isToday'
import parseISO from 'date-fns/parseISO'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    danger: {
        color: 'red'
    },
})
const EventSummary = ({ event }) => {
    const classes = useStyles()

    const signUpBtn = () => {
        if ((event.staff_needed.runners > event.staff_signedup.runners)
            && (event.staff_needed.captains > event.staff_signedup.captains)) {
            return <Button fullWidth className={classes.danger}>Needs Runners and Captains</Button>
        } else if ((event.staff_needed.runners > event.staff_signedup.runners)) {
            return <Button fullWidth className={classes.danger}>Needs Runners</Button>
        } else if ((event.staff_needed.captains > event.staff_signedup.captains)) {
            return <Button fullWidth className={classes.danger}>Needs Captains</Button>
        } else {
            return <Button fullWidth disabled>Fully Staffed</Button>
        }
    }

    return (
        <Box border={1} p={0.5} style={{ marginTop: 8 }}>
            <Typography component={'span'} align='left'>
                {event.name}<hr></hr>
                {event.guest_count} guests<br></br>
                {format(parseISO(event.start), 'ha')} to {format(parseISO(event.end), 'ha')}
            </Typography>
            <Typography variant='body2' align='left'>
                {event.notes}
            </Typography>
            {
                (isToday(parseISO(event.start)) || isFuture(parseISO(event.start))) &&
                signUpBtn()
            }
        </Box>
    )
}

export default EventSummary
