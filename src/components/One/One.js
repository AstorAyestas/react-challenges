import Box from './Box';
import hours from '../../utils/hours';

const One = () => {
    const driver = 8
    return (
        <>
        <div className="p-2 mx-2 my-2 bg-gray-100 shadow-md">
             <p className="text-gray-700">
                Construye una lista que contenga tramos horarios, en intervalos de 30 min. Que empiece a las 8 am y termine a las 8pm O sea un cuadro con un bloque que empiece a las 8, luego 8.30, 9, 9 30.. así hasta las 8pm La empresa tiene disponibilidad de 8 motociclistas cada 30 min Cuando alguien haga click sobre una de estas cajitas debería tomar un recurso de motociclista O sea un contador que empiece en 8 y luego baje a 7, a demás de marcar la caja en verde Si el mismo usuario da click en la misma caja, debe liberar el recurso, si se encontraba en verde, debe liberar el recurso, o sea el contador nuevamente pasa de 7 a 8 Si otros usuarios han tomado a todos los motociclistas, la caja debe aparecer en color rojo y no me debe dejar tomar ese horario Tiempo máximo 1hr
            </p> 
        </div>
        <div className="flex flex-wrap justify-around space-x-2">
            {
                hours.map((item, index) =>
                    <Box initialHour={item} initialDriver={driver} key={index} />
                )
            }
        </div>
        </>
    )
}
export default One;