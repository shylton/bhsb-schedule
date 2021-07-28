import React, { useState } from 'react'
import { startOfWeek, add as addDate, isMonday, format, parseISO } from 'date-fns'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CalendarDay from '../components/CalendarDay'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: 1075
        }
    }
}))

const dateMatch = (date1, date2) => {
    return format(date1, 'yMMd') === format(date2, 'yMMd')
}

/**
 * Description goes here
 */
const Week = ({ eventList }) => {
    const classes = useStyles()
    const [curDate] = useState(new Date())
    const [startDate, setStartDate] = useState(() => {
        if (isMonday(curDate)) {
            return curDate
        } else {
            return startOfWeek(curDate, { weekStartsOn: 1 })
        }
    })

    // the 7-day week to be rendered on the page
    const getDateList = () => {
        const tempList = [startDate]
        for (let i = 0; i < 27; i++) {
            tempList.push(addDate(tempList[i], { days: 1 }))
        }
        return tempList
    }
    const [dateList, setDateList] = useState(getDateList())

    // handleNextWeek: resets the list with new dates to be rendered

    return (
        <Box style={{ marginTop: 16, marginBottom: 16 }}>
            <Container>
                <Grid container spacing={1} className={classes.root} >
                    {dateList.map((dt) => {
                        return (
                            <Grid item xs={12} sm key={dt.toString()}>
                                <CalendarDay
                                    date={dt}
                                    eventList={eventList.filter((e) => dateMatch(parseISO(e.start), dt))}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default Week
