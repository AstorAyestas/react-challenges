import React, { useState } from 'react'
import { Driver } from './Driver'
const Box = ({ initialState }) => {
    const [timeline] = useState(initialState)
    const [driver, setDriver] = useState(8)
    const style = {
        backgroundColor: driver === 0 ? 'red' : 'green',
        cursor: (driver !== 8) ? 'pointer' : 'not-allowed'
    }
    const handleClick = () => {
        if (driver > 0) {
            setDriver(driver => driver - 1)
        }
    }
    const handleClickIn = () => {
        if (driver < 8) {
            setDriver(driver => driver + 1)
        }
    }

    return (
        <div>
            <div className='py-2 px-4 rounded font-bold my-2' style={style} onClick={handleClickIn} >{timeline}</div>
            <Driver handleClick={handleClick} driver={driver} />
        </div>
    )
}

export default Box;