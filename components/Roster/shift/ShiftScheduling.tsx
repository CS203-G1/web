import React, { useState } from "react"
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import moment from "moment"
import ShiftItem from "./ShiftItem"

const ShiftScheduling = () => {
    const [date, setDate] = useState<string>(moment().format("LL"))

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-2 items-center">
                    <div className="hover:text-blue-500 cursor-pointer"
                        onClick={() => { setDate(moment(date, "LL").subtract(1, 'days').format("LL")) }}>
                        <UilAngleLeft />
                    </div>

                    <div className="text-3xl">
                        {date}
                    </div>

                    <div className="hover:text-blue-500 cursor-pointer"
                        onClick={() => { setDate(moment(date, "LL").add(1, 'days').format("LL")) }}
                    >
                        <UilAngleRight />
                    </div>
                </div>
            </div>

            <h1 className="text-3xl">
                Shifts Available
            </h1>

            <div className="grid grid-cols-4 gap-2">
                <div className="text-3xl bg-gray-200 border flex flex-col justify-center">
                    <div className="text-center">
                        +
                    </div>
                </div>
                <ShiftItem id="1" position="Shift Manager 1" time_from="0800" time_to="1600" num_assigned={1} num_total={2} />

                <ShiftItem id="1" position="Shift Manager 1" time_from="0800" time_to="1600" num_assigned={1} num_total={2} />

                <ShiftItem id="1" position="Shift Manager 1" time_from="0800" time_to="1600" num_assigned={1} num_total={2} />
            </div>
        </div>
    )
}

export default ShiftScheduling