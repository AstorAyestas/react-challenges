import React from 'react';

export const Driver = ({ handleClick, driver }) => {

    const style = {
        cursor: (driver > 0) ? 'pointer' : 'not-allowed'
    }
    return (
        <div>
            <h4 className="font-bold text-gray-700">
                Drivers available: {driver}
            </h4>
            <button className='px-4 py-2 font-bold text-gray-100 bg-gray-500 rounded hover:bg-gray-700' style={style} onClick={handleClick}>Add new driver</button>
        </div>
    )
}
