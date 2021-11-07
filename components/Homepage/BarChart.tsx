import React, { useState } from 'react';
import { LineChart, AreaChart, Area, Line, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { DateTime } from 'luxon'
import numeral from "numeral";

interface props {
    data: any
}

const BarChartComponent = (props: props) => {

    const [xAxis, setXAxis] = useState(0)
    const [sawbRate, setSwabRate] = useState(0)
    const [fullyVaccinatedRate, setFullyVaccinatedRate] = useState(0)
    const [vaccinatedRate, setVaccinatedRate] = useState(0)

    const displaySwabRate = sawbRate === 0 && props.data && props.data.length > 0 ? props.data[props.data.length - 1].newDormitoryCases : 0
    const displayVaccinatedRate = sawbRate === 0 && props.data && props.data.length > 0 ? props.data[props.data.length - 1].newImportedCases : 0
    const displayFullyVaccinatedRate = sawbRate === 0 && props.data && props.data.length > 0 ? props.data[props.data.length - 1].newLocalCases : 0


    const updatePrice = (props: any) => {
        const currSwabRate = props.payload && props.payload.length > 0 ? props.payload[0].payload.newDormitoryCases : 0
        const currVaccinatedRate = props.payload && props.payload.length > 0 ? props.payload[0].payload.newImportedCases : 0
        const currFullyVaccinatedRate = props.payload && props.payload.length > 0 ? props.payload[0].payload.newLocalCases : 0
        const currTime = props.payload && props.payload.length > 0 ? props.payload[0].payload.createdAt : 0
        const axis = props.payload && props.payload.length > 0 ? props.coordinate.x : 0

        setSwabRate(currSwabRate)
        setFullyVaccinatedRate(currFullyVaccinatedRate)
        setVaccinatedRate(currVaccinatedRate)
        setXAxis(axis)

        return (
            <div className="text-xs left-0 p-1 bg-black text-white transform -translate-x-1/2 z-50">
                {DateTime.fromISO(currTime).toFormat("f")}
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full items-end gap-8">
            <ResponsiveContainer width="99%" height={200}>
                <LineChart data={props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={updatePrice} position={{ x: xAxis, y: 200 }} />\
                    <Line type="monotone" dataKey="newDormitoryCases" stroke="#63d6ff" fill="#a903fc" dot={false} />
                    <Line type="monotone" dataKey="newImportedCases" stroke="#a903fc" fill="#c4ffef" dot={false} />
                    <Line type="monotone" dataKey="newLocalCases" stroke="#fc036b" fill="#c4ffef" dot={false} />
                </LineChart>
            </ResponsiveContainer>

            <div className="flex flex-row gap-1">
                <div className="flex flex-col pr-2">
                    <span className="text-right">
                        New Domitory Cases
                    </span>
                    <span className="text-right">
                        New Imported Cases
                    </span>
                    <span className="text-right">
                        New Local Cases
                    </span>
                </div>

                <div className="flex flex-col">
                    <span className="text-right">
                        {numeral(sawbRate === 0 ? displaySwabRate : sawbRate).format('0')}
                    </span>
                    <span className="text-right">
                        {numeral(sawbRate === 0 ? displayVaccinatedRate : vaccinatedRate).format('0')}
                    </span>
                    <span className="text-right">
                        {numeral(sawbRate === 0 ? displayFullyVaccinatedRate : fullyVaccinatedRate).format('0')}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BarChartComponent