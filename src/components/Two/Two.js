import { Router } from '@reach/router';
import { useState } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import NotFound from '../NotFound';
import FormUser from './FormUser';
import Trivia from './Trivia';

const Two = () => {
    const [profile, setProfile] = useState();
    return (
        <>
            <ProfileContext.Provider value={{ profile, setProfile }}>
                <Router>
                    <FormUser path='/' />
                    <Trivia path='trivia' />
                    <NotFound default />
                </Router>
            </ProfileContext.Provider>
        </>
    );
}
export default Two;