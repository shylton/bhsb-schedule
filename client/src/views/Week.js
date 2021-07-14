import React, { useState, useEffect } from 'react'
import { startOfWeek, add as addDate, isMonday } from 'date-fns'

const Week = () => {
    const [curDate] = useState(new Date())

    const initStartDate = () => {
        if (isMonday(curDate)) {
            return curDate
        } else {
            return startOfWeek(curDate, { weekStartsOn: 1 })
        }
    }
    
    const [startDate, setStartDate] = useState(initStartDate())

    const getDateList = () => {
        const tempList = [startDate]
        for (let i = 0; i < 6; i++) {
            tempList.push(addDate(tempList[i], { days: 1 }))
        }
        return tempList
    }
    const [dateList, setDateList] = useState(getDateList())

    useEffect(() => {
        setDateList(getDateList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate])


    return (
        <ul>
            {dateList.map((e) => {
                return <li>{e.toDateString()}</li>
            })}
        </ul>
    )
}

export default Week
