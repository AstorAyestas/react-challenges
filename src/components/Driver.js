import React from 'react';

export const Driver = ({ handleClick, driver }) => {

    const style = {
        cursor: (driver > 0) ? 'pointer' : 'not-allowed'
    }
    return (
        <div>
            <h4 className="font-bold">
                Drivers available: {driver}
            </h4>
            <button className='bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded font-bold' style={style} onClick={handleClick}>Add new driver</button>
        </div>
    )
}
