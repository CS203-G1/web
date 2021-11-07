import { useState } from 'react';
import { LineChart, AreaChart, Area, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { DateTime } from 'luxon'

interface props {
    data: object[]
}

const LineChartComponent = (props:props) => {

    const [value, setValue] = useState(0)
    const [xAxis, setXAxis] = useState(0)

    const updatePrice = (props:any) => {
        const currValue = props.payload && props.payload.length > 0 ? props.payload[0].payload.value : 0
        const currTime = props.payload && props.payload.length > 0 ? props.payload[0].payload.time : 0
        const axis = props.payload && props.payload.length > 0 ? props.coordinate.x : 0
        
        setValue(currValue)
        setXAxis(axis)
        
        return (
            <div className="text-xs left-0 p-1 bg-black text-white transform -translate-x-1/2 z-50">
                {DateTime.fromISO(currTime).toFormat("f")}
            </div>
        )
    }

    return (
        <div>
            <ResponsiveContainer width="99%" height={200}>
                <AreaChart data={props.data}>
                    <Tooltip content={updatePrice} position={{ x: xAxis, y: 200 }} />
                    <Area type="monotone" dataKey="value" stroke="#26A482" fill="#c4ffef" dot={undefined} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChartComponent