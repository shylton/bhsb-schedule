import React from 'react'
import PropTypes from 'prop-types'
import { format, isToday, isPast, isFirstDayOfMonth } from 'date-fns'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    default: {
        width: 135,

    },
    prevDay: {
        width: 135,
        color: 'lightGray',
        fontStyle: 'italic'
    },
    curDay: {
        width: 135,
        '& > :first-child': {
            color: 'red'
        }
    }
})

const CalendarDay = ({ date, eventList }) => {
    const classes = useStyles()
    const renderDate = isFirstDayOfMonth(date) ? format(date, 'MMM d') : format(date, 'd')

    if (isToday(date)) {
        return (
            <Box border={1} p={1} className={classes.curDay}>
                <Typography variant='h6' style={{ textAlign: 'right' }}>
                    {renderDate}
                </Typography>
            </Box>
        )
    } else if (isPast(date)) {
        return (
            <Box border={1} p={1} className={classes.prevDay}>
                <Typography variant='h6' style={{ textAlign: 'right' }}>
                    {renderDate}
                </Typography>
            </Box>
        )
    } else {
        return (
            <Box border={1} p={1} className={classes.default}>
                <Typography variant='h6' style={{ textAlign: 'right' }}>
                    {renderDate}
                </Typography>
            </Box>
        )
    }


}

CalendarDay.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
}

export default CalendarDay
