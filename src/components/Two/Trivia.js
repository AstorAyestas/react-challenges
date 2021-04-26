import React, { useContext } from 'react'
import ProfileContext from '../../contexts/ProfileContext'
import useFilter from '../../hooks/useFilter';

const Trivia = () => {
    const { profile } = useContext(ProfileContext);
    const { filter } = useFilter(profile)
    const handleClick = (element) => {
    }
    return (
        <div className='p-2 mt-2 bg-indigo-100'>
            <h5 className='font-bold text-indigo-700 capitalize'>Usuario: {profile.user}</h5>
            <h5 className='font-bold text-indigo-700'>Categoria: {profile.category}</h5>
            <div className='flex flex-col items-center justify-center h-screen bg-indigo-700 rounded-md'>

                <p className='text-4xl font-bold text-indigo-200'>{filter[0].question}</p>
                <ul className='flex my-2 space-x-2 cursor-pointer'>
                    {
                        filter[0].options.map((option) => (

                            <li className='p-4 text-indigo-600 bg-indigo-100 rounded-sm hover:bg-indigo-200' onClick={handleClick} >{option}</li>
                        ))
                    }
                </ul>


                {/* {filter[0].options.map((item) => (
                    <di>{item}</di>
                ))} */}
            </div>

            { <p className="p-2 text-yellow-500">
                {/* {JSON.stringify(profile, null, 2)} */}
                {JSON.stringify(filter[0].options, null, 2)}
            </p>}


        </div>
    )
}

export default Trivia;
