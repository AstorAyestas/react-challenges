import { useState } from 'react';

const useForm = ({initialState}) => {
    const [form, setForm] = useState(initialState);
    const handleChange = ({target}) =>{
        const {name, value} = target;
        setForm({
            ...form,
            [name]: value
        });
    }
    return {
        form,
        handleChange
    }   
}

export default useForm;