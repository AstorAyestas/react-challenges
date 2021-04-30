import { Redirect, useParams } from '@reach/router';
import React, { useMemo, useState } from 'react';
import trivias from '../../utils/trivias.json';
import Play from './Play';
import Result from './Result';

const Trivia = () => {
    const [answers, setAnswers] = useState([])
    const [time, setTime] = useState(0)
    const { category } = useParams()
    const filterTrivias = () => trivias.filter(item => item.category === category);
    const filtered = useMemo(filterTrivias, [category])

    if (filtered.length === 0) {
        return <Redirect to='/react-challenges' noThrow />
    }
    return (
        <>
            {
                answers.length === filtered.length ?
                    <Result answers={answers} time={time} /> :
                    <Play filtered={filtered} setAnswers={setAnswers} setTime={setTime} />
            }
        </>
    )
}

export default Trivia;
