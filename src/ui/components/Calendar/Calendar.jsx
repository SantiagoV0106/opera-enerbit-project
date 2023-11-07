import { useState } from 'react'

// icons
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'

import './calendar.css'

export function Calendar() {

    const [currentDate, setCurrentDate] = useState(new Date())

    const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']

    console.log(currentDate);
    console.log(currentDate.getDate());

    return (
        <div className="calendar-container">
            <FaChevronLeft className='calendar-icon' />
            {
                daysOfWeek.slice(0, 5).map((day, i) => {
                    return (
                        <div key={i} className={currentDate.getDate() === currentDate.getDate() - 1 + i ? 'current-day-container' : 'day-container'}>
                            <p className={currentDate.getDate() === currentDate.getDate() - 1 + i ? 'current-day-date' : 'day-date'} > {day} </p>
                            <p className={currentDate.getDate() === currentDate.getDate() - 1 + i ? 'current-number-date' : 'number-date'}> {currentDate.getDate() - 1 + i} </p>
                        </div>

                    )
                })
            }
            <FaChevronRight className='calendar-icon' />
        </div>
    )
}