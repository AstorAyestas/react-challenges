import { Redirect, useParams } from '@reach/router';
import React, { useContext, useMemo, useState } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import trivias from '../../utils/trivias.json';
import Play from './Play';
import Result from './Result';

const Trivia = () => {
    const { profile } = useContext(ProfileContext)
    const [answers, setAnswers] = useState([])
    const [time, setTime] = useState(0)
    const { category } = useParams()
    const filterTrivias = () => trivias.filter(item => item.category === category);
    const filter = useMemo(filterTrivias, [category])

    if (filter.length === 0) {
         return <Redirect to='/react-challenges' noThrow/>
    }
    return (
        <div className='text-center'>
            {profile.user && <h5 className='font-bold text-indigo-500 capitalize'>User: {profile.user}</h5>}
            <h5 className='font-bold text-indigo-500 capitalize'>Category: {category}</h5>
            {
                answers.length === filter.length ? <Result answers={answers} time={time} /> : <Play filter={filter} setAnswers={setAnswers} setTime={setTime} />
            }
        </div>
    )
}

export default Trivia;
