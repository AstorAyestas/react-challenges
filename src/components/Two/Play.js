import React, { useState } from 'react'
import Result from './Result'

const Play = ({ filter }) => {
    const [answers, setAnswers] = useState([])
    const [marked, setMarked] = useState(0)
    const [correct, setCorrect] = useState(null)
    const handleClick = (index) => {
        setAnswers((answers) => [...answers, index])
        marked < filter.length -1 && setMarked((marked) => marked + 1)
    }
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-indigo-100 rounded-md'>
            {
                filter.length === answers.length && (<pre className='bg-white'>
                    {JSON.stringify(answers, null, 3)}
                </pre>
                )
            }
            <p className='text-4xl font-bold text-indigo-500'>{filter[marked].question}</p>
            <ul className='flex my-2 space-x-4 cursor-pointer'>
                {
                    filter[marked].options.map((option, index) => (
                        <li className='p-4 font-bold text-indigo-100 bg-indigo-400 rounded-md hover:bg-indigo-500' onClick={() => { handleClick(index) }} key={option} >{option}</li>
                    ))
                }
            </ul>
                <Result correct = {correct} />

        </div>
    )
}

export default Play;
