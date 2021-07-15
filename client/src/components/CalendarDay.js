import React from 'react'
import PropTypes from 'prop-types'
import { format, isToday, isPast, isFirstDayOfMonth } from 'date-fns'
import EventSummary from './EventSummary'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    default: {
        minWidth: 135
    },
    prevDay: {
        minWidth: 135,
        color: 'lightGray',
        fontStyle: 'italic'
    },
    curDay: {
        minWidth: 135,
        '& > :first-child': {
            color: 'red'
        }
    }
})

const CalendarDay = ({ date, eventList }) => {
    const classes = useStyles()

    // display weekday for smallscreen (vertical arrangement)
    const renderDate = () => {
        if (isFirstDayOfMonth(date)) {
            return (
                <Typography variant='h6' style={{ textAlign: 'right' }}>
                    <span style={{color: 'green'}}>{format(date, 'MMM')}</span>
                    <span>{format(date, ' - E d')}</span>
                </Typography>
            )
        } else {
            return (
                <Typography variant='h6' style={{ textAlign: 'right' }}>
                    {format(date, 'E d')}
                </Typography>
            )
        }
    }

    if (isToday(date)) {
        return (
            <Paper>
                <Box p={1} className={classes.curDay}>
                    {renderDate()}
                    {eventList.map((e) => <EventSummary key={e.start.toString()} event={e} />)}
                </Box>
            </Paper>
        )
    } else if (isPast(date)) {
        return (
            <Paper>
                <Box p={1} className={classes.prevDay}>
                    {renderDate()}
                    {eventList.map((e) => <EventSummary key={e.start.toString()} event={e} />)}
                </Box>
            </Paper>
        )
    } else {
        return (
            <Paper>
                <Box p={1} className={classes.default}>
                    {renderDate()}
                    {eventList.map((e) => <EventSummary key={e.start.toString()} event={e} />)}
                </Box>
            </Paper>
        )
    }
}

CalendarDay.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    eventList: PropTypes.array.isRequired
}

export default CalendarDay
