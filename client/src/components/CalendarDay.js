import React from 'react'
import format from 'date-fns/format'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    root: {
        width: 135,
    },
    date: {
        textAlign: 'right'
    },
    prevDay: {
        color: 'gray',
        fontStyle: 'italic'
    },
    curDay: {
        color: 'red'
    }
})

const CalendarDay = ({ type, date, eventList }) => {
    const classes = useStyles()
    const isPrevDay = `${type === 'prevDay' ? classes.prevDay : ''}`
    const isCurDay = `${type === 'curDay' ? classes.curDay : ''}`
    

    return (
        <Box border={1} p={1} className={`${classes.root} ${isPrevDay}`}>
            <Typography variant='h6' className={`${classes.date} ${isCurDay}`}>
                {format(date, 'd')}
            </Typography>
        </Box>
    )
}

export default CalendarDay
