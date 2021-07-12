import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        minWidth: 135,
    },
    date: {
        textAlign: 'right'
    },
})

const EventSummary = ({ event }) => {
    const classes = useStyles()

    return (
        <Grid item xs={12} sm={1} className={classes.root}>
            <Box border={1} p={1}>
                <Typography variant='h6' className={classes.date}>
                    {event.start.getDate()}
                </Typography>
                <Typography>
                    {event.name}<hr></hr>
                    {event.guest_count} guests<br></br>
                    start time: {event.start.getHours()}<br></br>
                    end time: {event.end.getHours()}
                </Typography>
                <Typography variant='body2'>
                    {event.notes}
                </Typography>
            </Box>
        </Grid>
    )
}

export default EventSummary
