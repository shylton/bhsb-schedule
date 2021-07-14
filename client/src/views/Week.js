import React, { useState } from 'react'
import { startOfWeek, add as addDate, isMonday } from 'date-fns'

const Week = () => {
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
        for (let i = 0; i < 6; i++) {
            tempList.push(addDate(tempList[i], { days: 1 }))
        }
        return tempList
    }
    const [dateList, setDateList] = useState(getDateList())

    // handleNextWeek: resets the list with new dates to be rendered

    return (
        <ul>
            {dateList.map((e) => {
                return <li>{e.toDateString()}</li>
            })}
        </ul>
    )
}

export default Week
