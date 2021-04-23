import React, {useContext} from 'react';
import ProfileContext from '../../contexts/ProfileContext';
import useForm from '../../hooks/useForm';

const FormUser = () => {
    const dataForm = {
        user: '',
        category: ''
    }
    const profile = useContext(ProfileContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        profile.setProfile(
            user,
            category
        );
        console.log(user, category);
        console.log(profile.profile);
    }

    const { handleChange, user, category, form } = useForm(dataForm);
    return (
        <div className='flex justify-center '>
            <form autoComplete='off' onSubmit={handleSubmit} className='space-y-2'>
                <div className='flex flex-col'>
                    <label className='text-gray-600'>Usuario</label>
                    <input type='text' name='user' onChange={handleChange} value={user} required></input>
                </div>
                <div className='flex flex-col'>
                    <label className='text-gray-600'>Categoría</label>
                    <select name='category' onChange={handleChange} value={category} required>
                        <option value=''>Seleccione una categoria</option>
                        <option value='01'>Futbol</option>
                        <option value='02'>Cultura pop</option>
                        <option value='03'>Historia</option>
                    </select>
                </div>
                <button className='w-full p-2 text-gray-200 bg-gray-600 rounded hover:bg-gray-700' type='submit'>Jugar</button>
            </form>
        </div>
    )
}

export default FormUser;