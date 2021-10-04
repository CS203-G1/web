// @ts-ignore
import { UilUser } from '@iconscout/react-unicons'

interface props {
    type: string
    number: number
}

const RequestItem = (props:props) => {
    return (
        <div className="flex flex-row justify-between items-center px-2 py-4 gap-6 border-b hover:bg-gray-200 rounded-md cursor-pointer">
            <div className="flex flex-row gap-1 items-center text-gray-400">
                <UilUser />
                <h1 className="text-sm text-gray-500">
                    {props.type}
                </h1>
            </div>

            <div className="font-bold">
                {props.number}
            </div>
        </div>
    )
}

export default RequestItem