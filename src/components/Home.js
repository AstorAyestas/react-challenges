import React from 'react';
import exercises from '../utils/exercises.json';
import Exercise from './Exercise';

const Home = () => {
    return (
        <ul>
            {
                exercises.map(({ id ,title, description, route, working }) => <Exercise key={id} title={title} description={description} route={route} working={working} />)
            }
        </ul>
    )
}

export default Home;
