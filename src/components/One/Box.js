import React, { useState } from 'react'
import { Driver } from './Driver'
const Box = ({ initialHour, initialDriver }) => {
    const [timeline] = useState(initialHour)
    const [driver, setDriver] = useState(8)
    const style = {
        backgroundColor: driver === 0 ? '#EF4444' : '#10B981',
        color: driver === 0 ? '#FEE2E2' : '#D1FAE5',
        cursor: (driver !== initialDriver) ? 'pointer' : 'not-allowed'
    }
    const handleClick = () => {
        if (driver > 0) {
            setDriver(driver => driver - 1)
        }
    }
    const handleClickIn = () => {
        if (driver < initialDriver) {
            setDriver(driver => driver + 1)
        }
    }

    return (
        <div>
            <div className='px-4 py-2 my-2 font-bold text-center text-gray-800 rounded' style={style} onClick={handleClickIn} >{timeline}</div>
            <Driver handleClick={handleClick} driver={driver} />
        </div>
    )
}

export default Box;