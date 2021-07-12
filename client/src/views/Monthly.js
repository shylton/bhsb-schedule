import React from 'react'
import EventSummary from '../components/EventSummary'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))

const Monthly = ({ event }) => {
    const classes = useStyles()

    return (
        <Grid container>
            {[1, 2, 3, 4, 5, 6, 7].map((e) =>
                <EventSummary event={event}></EventSummary>
            )}
        </Grid>
    )
}

export default Monthly
