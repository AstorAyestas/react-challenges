import { useNavigate } from '@reach/router';
import React, { useContext } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import useForm from '../../hooks/useForm';

const FormUser = () => {
    const dataForm = {
        user: ''
    }
    const profile = useContext(ProfileContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        profile.setProfile(
            {
                user: form.user
            }
        );
        e.target.reset()
        navigate(`two/trivia/${form.category}`, {replace:true})
    }

    const { handleChange, user, category, form } = useForm(dataForm);
    return (
        <div className='flex items-center justify-center h-screen '>
            <form autoComplete='off' onSubmit={handleSubmit} className='p-4 space-y-2 bg-indigo-100 border-t-2 border-indigo-600 rounded-md shadow-md' >
                <div className='flex flex-col'>
                    <label className='text-indigo-500'>User</label>
                    <input className='text-indigo-500 border-0 border-b-2 border-indigo-200 border-y-2 focus:ring-0 focus:border-indigo-600' type='text' name='user' onChange={handleChange} value={user} required></input>
                </div>
                <div className='flex flex-col'>
                    <label className='text-indigo-500'>Category</label>
                    <select className='text-indigo-500 border-0 border-b-2 border-indigo-200 focus:ring-0 focus:border-indigo-600' name='category' onChange={handleChange} value={category} required>
                        <option value=''>Select a Category</option>
                        <option value='soccer'>Soccer</option>
                        <option value='pop'>Pop culture</option>
                        <option value='history'>History</option>
                    </select>
                </div>
                <button className='w-full p-2 font-bold text-indigo-100 bg-indigo-400 rounded hover:bg-indigo-500' type='submit'>Play</button>
            </form>
        </div>
    )
}

export default FormUser;