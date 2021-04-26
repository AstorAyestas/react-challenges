import React, { useContext } from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import useForm from '../../hooks/useForm';
import { useNavigate } from '@reach/router';

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
        <div className='flex justify-center mt-2'>
            <form autoComplete='off' onSubmit={handleSubmit} className='space-y-2' >
                <div className='flex flex-col'>
                    <label className='text-gray-600'>Usuario</label>
                    <input type='text' name='user' onChange={handleChange} value={user} required></input>
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-600'>Categoría</label>
                    <select name='category' onChange={handleChange} value={category} required>
                        <option value=''>Seleccione una categoria</option>
                        <option value='Futbol'>Futbol</option>
                        <option value='Pop'>Cultura pop</option>
                        <option value='Historia'>Historia</option>
                    </select>
                </div>
                <button className='w-full p-2 text-gray-200 bg-gray-600 rounded hover:bg-gray-700' type='submit'>Jugar</button>
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