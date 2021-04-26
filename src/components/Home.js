import React from 'react';
import Exercise from './Exercise';
import exercises from '../utils/exercises';

const Home = () => {
    return (
        <ul>
            {
                exercises.map(({ title, description, route, working }) => <Exercise key={title} title={title} description={description} route={route} working={working} />)
            }
        </ul>
    )
}

export default Home;
