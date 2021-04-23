import {useState} from 'react'; 
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
            <div className="p-2 mx-2 my-2 bg-gray-100 shadow-md">
                <p className='text-red-700'>Work in progress</p>
                <p className="text-gray-600">
                    Construye una aplicación que cuando ingreses deberá pedir ingresar algunos datos luego de eso podré elegir una categoría de preguntas y a continuación, mostrará de manera aleatoria preguntas que se encuentran en un banco de preguntas con 5 simples respuestas, pero solo una es la correcta debe pedirme responder 20 preguntas, y cuando termine la ultima, debe entregarme un mensaje de felicitaciones y agregarme al ranking de usuarios que han terminado el juego de trivia a demás debe mostrarme el tiempo que me tomó terminar esta trivia
            </p>
            </div>
            <p className="p-2 text-yellow-500">
                {JSON.stringify( profile ,null ,2)}
            </p>
            
            <ProfileContext.Provider value={{profile, setProfile}}>
                <FormUser />
            </ProfileContext.Provider>
        </>
    );

}
export default Two;