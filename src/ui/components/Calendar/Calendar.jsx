import { useState } from 'react'

// icons
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'

import './calendar.css'

export function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date())

    const daysOfWeek = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB','DOM']

    console.log(currentDate);
    console.log(currentDate.getDate());

    return (
        <div className="calendar-container">
            <FaChevronLeft className='calendar-icon' />
            {
                daysOfWeek.slice(0, 5).map((day, i) => {
                    const today = new Date()
                    today.setHours(0,0,0,0)
                    const dayIndex = (today.getDay() + 6) % 7
                    return (
                        <div key={i} className={i === dayIndex ? 'current-day-container' : 'day-container'}>
                            <p className={i === dayIndex ? 'current-day-date' : 'day-date'} > {day} </p>
                            <p className={i === dayIndex ? 'current-number-date' : 'number-date'}> {currentDate.getDate() - dayIndex + i} </p>
                        </div>

                    )
                })
            }
            <FaChevronRight className='calendar-icon' />
        </div>
    )
}