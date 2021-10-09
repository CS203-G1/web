import React, { useState } from "react"
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import moment from "moment"

const RosterScheduling = () => {
    const [date, setDate] = useState<string>(moment().format("LL"))

    return (
        <div className="flex flex-col gap-2">
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

            <h1 className="text-3xl">
                Shifts Available
            </h1>

            <div className="grid grid-cols-4 gap-2">
                <div className="text-3xl bg-gray-200 border flex flex-col justify-center">
                    <div className="text-center">
                        +
                    </div>
                </div>
                <div className="bg-blue-800 rounded-md shadow-md hover:shadow-lg py-5 flex flex-col px-4 text-white">
                    <h1 className="text-xl text-white">
                        Shift Manager 1
                    </h1>
                    <h3 className=" text-white">
                        0900 - 1700
                    </h3>

                    <div>
                        0/2 Assigned
                    </div>
                </div>
                <div className="bg-blue-800 rounded-md shadow-md hover:shadow-lg py-5 flex flex-col px-4 text-white">
                    <h1 className="text-xl text-white">
                        Shift Manager 2
                    </h1>
                    <h3 className=" text-white">
                        1700 - 2100
                    </h3>

                    <div>
                        0/2 Assigned
                    </div>
                </div>
                <div className="bg-blue-800 rounded-md shadow-md hover:shadow-lg py-5 flex flex-col px-4 text-white">
                    <h1 className="text-xl text-white">
                        Line Cook
                    </h1>
                    <h3 className=" text-white">
                        0900 - 1700
                    </h3>

                    <div>
                        <span className="text-red-200">0</span>/2 Assigned
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RosterScheduling