//@ts-ignore
import { UilBell, UilEllipsisH, UilAngleUp } from '@iconscout/react-unicons'

interface props {
    value: number
    type: string
    change: number
    index: number
}

const ActivityCard = (props:props) => {
    const bgColor = ['blue', 'green', 'indigo', 'blue']
    return (
        <div className={`card bg-gradient-to-r from-${bgColor[props.index]}-500 via-${bgColor[props.index]}-400 to-${bgColor[props.index]}-300 flex flex-row gap-6`}>

                    <div className="flex-1 flex flex-col gap-3">
                        <div className="flex">
                            <div className="p-2 bg-white rounded-md text-blue-200">
                                <UilBell />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-xl text-white">
                                {props.value}
                            </h1>
                            <h2 className="text-white text-xs">
                                {props.type}
                            </h2>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-end h-full justify-between text-white">
                        <UilEllipsisH />

                        <div className="border border-white rounded-full px-2 py-1 text-xs flex items-center">
                            <span>+{props.change}%</span>
                            <UilAngleUp />
                        </div>
                    </div>

                </div>
    )
}
export default ActivityCard