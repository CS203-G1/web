//@ts-ignore
import { UilCheck } from '@iconscout/react-unicons'

interface props {
    name: string
    checked: boolean
}

const ShiftEmployeeItem = (props: props) => {
    return (
        <>
            {
                props.checked ?
                <div className="flex flex-row justify-between bg-green-200 hover:bg-green-400 px-4 py-2 rounded-md cursor-pointer items-center">
                    <div>
                        Rui Xian
                    </div>

                    <UilCheck />
                </div>
                :
                <div className="flex flex-row justify-between hover:bg-gray-100 px-4 py-2 rounded-md cursor-pointer items-center">
                    <div>
                        Rui Xian
                    </div>
                </div>
            }
        </>
    )
}
export default ShiftEmployeeItem