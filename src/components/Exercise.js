import { Link } from '@reach/router';
import React from 'react';

const Exercise = ({ title, description, route, working }) => {
    return (
        <li className="p-2 mx-4 my-4 text-center bg-gray-100 shadow-md">
            <h3 className="font-semibold text-gray-600">{title}</h3>
            {
                working && <p className='text-red-700'>Trabajo aún incompleto</p>
            }
            <p className="text-justify text-gray-600">
                {description}
            </p>
            <Link className="font-semibold text-blue-500 hover:underline" to={route} >Ver...</Link>
        </li>
    )
}

export default Exercise
