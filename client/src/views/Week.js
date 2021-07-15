import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { startOfWeek, add as addDate, isMonday } from 'date-fns'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CalendarDay from '../components/CalendarDay'

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: 945
        }
    }
}))

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
            <Container>
                <Grid container className={classes.root} >
                    {dateList.map((dt) => {
                        return <Grid item xs={12} sm key={dt.toString()}>
                            <CalendarDay date={dt} eventList={[eventList[0], eventList[1]]}/>
                        </Grid>
                    })}
                </Grid>
            </Container>
    )
}

Week.propTypes = {
    eventList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        guest_count: PropTypes.number.isRequired,
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
        notes: PropTypes.string.isRequired,
        staff_needed: {
            manager: PropTypes.number.isRequired,
            captain: PropTypes.number.isRequired,
            runner: PropTypes.number.isRequired
        },
        staff_signedup: {
            manager: PropTypes.number.isRequired,
            captain: PropTypes.number.isRequired,
            runner: PropTypes.number.isRequired
        }
    }))
}

export default Week
