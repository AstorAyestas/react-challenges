import React, { useState, useEffect } from 'react';

const Play = ({ filtered, setAnswers, setTime }) => {
    const [marked, setMarked] = useState(0)
    useEffect(() => {
        setTime(Date.now())
        return () => {
            setTime((time) => {
                const sub = (Date.now() - time);
                return (Math.floor(sub / 1000))
            })
        }
    }, [filtered, setTime])

    const handleClick = (index) => {
        setAnswers(
            (answers) => {
                return filtered[marked].answer === index ? [...answers, 1] : [...answers, 0]
            }
        )
        marked < filtered.length && setMarked((marked) => marked + 1)
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen space-y-4 bg-gradient-to-br from-purple-100 to-purple-300'>
            <div className='text-2xl font-bold text-center text-purple-500'>
                <h3>{marked + 1}</h3>
                <h4>Questions</h4>
            </div>
            <h5 className='mx-4 text-4xl font-bold text-purple-500 capitalize'>{filtered[marked].question}</h5>
            <ul className='grid gap-4 cursor-pointer sm:grid-flow-col-1 md:grid-cols-2 '>
                {
                    filtered[marked].options.map((option, index) => (
                        <li className='p-4 font-bold text-center text-purple-100 capitalize transition duration-500 ease-in-out transform bg-purple-400 rounded-md hover:scale-110 hover:bg-purple-500' onClick={() => { handleClick(index) }} key={option} >{option}</li>
                    ))
                }
            </ul>
        </div >
    )
}

export default Play;
