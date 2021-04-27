import { Link } from '@reach/router';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex p-10 font-semibold bg-gray-100 rounded-sm shadow-lg'>
                <p className='text-gray-600'>Pagina no encontrada... </p>
                <Link className='text-blue-500 hover:underline semibold' to='react-challenges' >Volver</Link>
            </div>
        </div>
    )
}

export default NotFound
