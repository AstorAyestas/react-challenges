import React from 'react';
import { Link } from '@reach/router';

const Exercise = ({ title, description, route, working }) => {
    return (
        <li className="p-2 mx-2 my-4 text-center bg-gray-100 shadow-md">
            <h3 className="font-semibold text-gray-600">{title}</h3>
            {
                working && <p className='text-red-700'>Trabajo aún incompleto</p>
            }
            <p className="text-gray-600">
                {description}
            </p>
            <Link className="font-semibold text-blue-500 hover:underline" to={route} >Ver...</Link>
        </li>
    )
}

export default Exercise
