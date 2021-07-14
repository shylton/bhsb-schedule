import React from 'react'
import EventSummary from '../components/EventSummary'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: 960
        }
    }
}))
// make a table that contains eventSummarys inside each day of month


const Monthly = ({ event }) => {
    const classes = useStyles()
    let daysList = []

    for (let i = 0; i < 30; i++) {
        if (i === 0) {
            daysList.push(new Date())
        }      
    }
    return (
        <Grid container className={classes.root}>
            {[1, 2, 3, 4, 5, 6, 7].map((e) =>
                <EventSummary event={event}></EventSummary>
            )}
        </Grid>
    )
}

export default Monthly
