import React, { useState } from "react"
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import moment from "moment"

const RosterScheduling = () => {
    const [date, setDate] = useState<string>(moment().format("LL"))

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-row gap-2 items-center">
                    <div className="hover:text-blue-500 cursor-pointer"
                        onClick={() => { setDate(moment(date, "LL").subtract(1, 'days').format("LL")) }}>
                        <UilAngleLeft />
                    </div>

                    <div>
                        {date}
                    </div>

                    <div className="hover:text-blue-500 cursor-pointer"
                        onClick={() => { setDate(moment(date, "LL").add(1, 'days').format("LL")) }}
                    >
                        <UilAngleRight />
                    </div>
                </div>
            </div>


        </>
    )
}

export default RosterScheduling