import React, { useContext, useMemo } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import trivias from '../../utils/trivias.json';
import Play from './Play';

const Trivia = () => {
    const { profile } = useContext(ProfileContext);
    const filterTrivias = () => trivias.filter((item) => item.category === profile.category);
    
    const filter = useMemo(filterTrivias, [profile.category])
    return (
        <div className='text-center'>
            <h5 className='font-bold text-indigo-500 capitalize'>Usuario: {profile.user}</h5>
            <h5 className='font-bold text-indigo-500'>Categoria: {profile.category}</h5>
             <Play filter={filter} /> 
        </div>
    )
}

export default Trivia;
