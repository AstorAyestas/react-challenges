import React, { useState, useEffect } from 'react';

const Play = ({ filtered, setAnswers, setTime }) => {
    const [marked, setMarked] = useState(0)
    
    useEffect(() => {
        setTime(Date.now())
        return () => {
        setTime( (time) =>{
            const sub = (Date.now() - time);
            return( Math.floor(sub/1000))
        } )
        }
    }, [filtered,setTime])
    
    const handleClick = (index) => {
        setAnswers(
            (answers) => {
                return filtered[marked].answer === index ? [...answers, 1] : [...answers, 0]
            }
        )
        marked < filtered.length && setMarked((marked) => marked + 1)
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-indigo-100 rounded-md'>
            <p className='text-4xl font-bold text-indigo-500 capitalize'>{filtered[marked].question}</p>
            <ul className='flex my-2 space-x-4 cursor-pointer'>
                {
                    filtered[marked].options.map((option, index) => (
                        <li className='p-4 font-bold text-indigo-100 capitalize bg-indigo-400 rounded-md hover:bg-indigo-500' onClick={() => { handleClick(index) }} key={option} >{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Play;
