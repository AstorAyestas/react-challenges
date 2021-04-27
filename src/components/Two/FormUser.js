import { useNavigate } from '@reach/router';
import React, { useContext } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import useForm from '../../hooks/useForm';

const FormUser = () => {
    const dataForm = {
        user: '',
        category: ''
    }
    const profile = useContext(ProfileContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        profile.setProfile(
            {
                user: form.user,
                category: form.category
            }
        );
        navigate('two/trivia')
    }

    const { handleChange, user, category, form } = useForm(dataForm);
    return (
        <div className='flex items-center justify-center h-screen '>
            <form autoComplete='off' onSubmit={handleSubmit} className='p-4 space-y-2 bg-indigo-100 border-t-2 border-indigo-600 rounded-md shadow-md' >
                <div className='flex flex-col'>
                    <label className='text-indigo-500'>Usuario</label>
                    <input className='text-indigo-500 border-0 border-b-2 border-indigo-200 border-y-2 focus:ring-0 focus:border-indigo-600' type='text' name='user' onChange={handleChange} value={user} required></input>
                </div>
                <div className='flex flex-col'>
                    <label className='text-indigo-500'>Categoría</label>
                    <select className='text-indigo-500 border-0 border-b-2 border-indigo-200 focus:ring-0 focus:border-indigo-600' name='category' onChange={handleChange} value={category} required>
                        <option value=''>Seleccione una categoria</option>
                        <option value='Futbol'>Futbol</option>
                        <option value='Pop'>Cultura pop</option>
                        <option value='Historia'>Historia</option>
                    </select>
                </div>
                <button className='w-full p-2 font-bold text-indigo-100 bg-indigo-400 rounded hover:bg-indigo-500' type='submit'>Jugar</button>
            </form>
            {/* <pre>
                {
                    JSON.stringify(form, null, 3)
                }
            </pre> */}
        </div>
    )
}

export default FormUser;