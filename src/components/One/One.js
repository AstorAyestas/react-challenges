import Box from './Box';
import hours from '../../utils/hours';

const One = () => {
    const driver = 8
    return (
        <>

            <div className="flex flex-wrap justify-around mt-2 space-x-2">
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