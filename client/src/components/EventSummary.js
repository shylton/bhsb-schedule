import React from 'react'
import format from 'date-fns/format'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        width: 135,
    },
    date: {
        textAlign: 'right'
    },
})

const EventSummary = ({ event }) => {
    const classes = useStyles()
    const curTheme = useTheme()
    const smallScreen = useMediaQuery(curTheme.breakpoints.down('xs'))

    return (
        smallScreen
            ? <Grid item xs={12} className={classes.root}>
                <Box border={1} p={1}>
                    <Typography variant='h6' className={classes.date}>
                        {format(event.start, 'eee d')}
                    </Typography>
                    <Typography>
                        {event.name}<hr></hr>
                        {event.guest_count} guests<br></br>
                        from {format(event.start, 'ha')} to {format(event.end, 'ha')}
                    </Typography>
                    <Typography variant='body2'>
                        {event.notes}
                    </Typography>
                </Box>
            </Grid>
            : <Grid item className={classes.root}>
                <Box border={1} p={1}>
                    <Typography variant='h6' className={classes.date}>
                        {event.start.getDate()}
                    </Typography>
                    <Typography>
                        {event.name}<hr></hr>
                        {event.guest_count} guests<br></br>
                        {format(event.start, 'ha')} to {format(event.end, 'ha')}
                    </Typography>
                    <Typography variant='body2'>
                        {event.notes}
                    </Typography>
                </Box>
            </Grid>
    )
}

export default EventSummary
