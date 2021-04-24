import { useState } from 'react';
import FormUser from './FormUser';
import ProfileContext from '../../contexts/ProfileContext';

// const profile = {
//     user: '',
//     category: ''
// };

const Two = () => {
    const [profile, setProfile] = useState();
    return (
        <>

            {/* <p className="p-2 text-yellow-500">
                {JSON.stringify( profile ,null ,2)}
            </p> */}
            <ProfileContext.Provider value={{ profile, setProfile }}>
                <FormUser />
            </ProfileContext.Provider>
        </>
    );

}
export default Two;