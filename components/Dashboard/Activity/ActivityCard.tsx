//@ts-ignore
import { UilBell, UilEllipsisH, UilAngleUp, UilArrowGrowth, UilChartDown } from '@iconscout/react-unicons'

interface props {
    value: number
    type: string
    change: number
}

const ActivityCard = (props: props) => {
    const graph = props.change > 0 ? <UilArrowGrowth /> : <UilChartDown />
    const graphColor = props.change > 0 ? "green" : "red"

    return (
        <div className={`card bg-white flex-1 flex flex-col gap-3`}>
            <h2 className="font-bold text-md">
                {props.type}
            </h2>

            <h1 className="text-xl font-extrabold flex flex-row justify-between">
                <div>
                    {props.value}
                </div>

                <div className={`flex items-center text-${graphColor}-500`}>
                    <span className="text-sm">
                        {props.change}%
                    </span>
                    {graph}
                </div>
            </h1>
        </div>
    )
}
export default ActivityCard