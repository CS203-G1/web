import { useState } from "react"
import { Employee } from "../../types/Employee/employee"
import { UilAngleDown, UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'

interface props {
    number: number
    from: string
    to: string
    employees: Employee[]
    numberOfEmployees: number
}

const TimeRoster = (props: props) => {
    const [open, setOpen] = useState(false)

    const animation = open ? "max-h-36 opacity-100" : "max-h-0 opacity-0"

    return (
        <div className="w-full shadow-md hover:shadow-lg border-b pt-2 mb-4 cursor-pointer">
            <div className="flex flex-row justify-between items-center px-2" onClick={() => {setOpen(!open)}}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold rounded-sm">
                        Shift {props.number}
                    </h1>
                    <h2 className="text-gray-500 tracking-tight">
                        {props.from} - {props.to}
                    </h2>
                    <h2 className="text-gray-500 tracking-tight">
                        Number of employees: {props.numberOfEmployees}
                    </h2>
                </div>

                {
                    !open ? 
                    <UilAngleRight size="35" color="" />
                    :
                    <UilAngleDown size="35" color="" />
                }
            </div>

            <div className="flex flex-col">
                {
                    props.employees && props.employees.map((item, index) => {
                        return (
                            <div className={`transition-all ease-in-out duration-300 border-b px-2 hover:bg-gray-300 cursor-pointer flex flex-col ${animation}`} key={index}>
                                <h1 className="text-lg font-semibold py-1">
                                    {item.name}
                                </h1>
                                <div className="text-gray-500">
                                    {item.healthStatus}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TimeRoster