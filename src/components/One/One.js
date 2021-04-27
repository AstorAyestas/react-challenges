import Box from './Box';
import hours from '../../utils/hours.json';
const One = () => {
    const driver = 8
    return (
        <>
            <div className="flex flex-wrap justify-around mt-2 ">
                {
                    hours.map((item) =>
                        <Box initialHour={item.hour} initialDriver={driver} key={item.id} />
                    )
                }
            </div>
        </>
    )
}
export default One;