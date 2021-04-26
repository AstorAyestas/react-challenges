import { useState, useEffect } from 'react'
import trivias from '../utils/trivias'

const useFilter = ({ category }) => {
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        setFilter((filter) => trivias.filter((item) => item.category === category));
    }, [category])

    return { filter }
}

export default useFilter
