import { useState } from "react"
import { Employee } from "../../types/Employee/employee"
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight, UilPlus } from '@iconscout/react-unicons'
import Link from 'next/link'
import { DateTime } from "luxon"
import { addEmployeeRoster } from '../../services/roster/roster/roster'
import { Auth } from "aws-amplify"
import { message } from 'antd'
interface props {
    number: number
    from: string
    to: string
    employees: Employee[]
    numberOfEmployees: number
    rosterId: string
}

const TimeRoster = (props: props) => {
    const [open, setOpen] = useState(false)
    const animation = open ? "max-h-36 opacity-100 py-2" : "max-h-0 opacity-0 py-0"

    const addEmployee = async () => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            addEmployeeRoster(jwt, props.rosterId, "6149483b-5c17-45ae-9564-34e7b40dbfd7")
            .then()
            .catch(e => {
                message.error(e.message)
            })
        })
    }

    return (
        <div className="w-full shadow-md hover:shadow-lg border-b pt-2 mb-4 cursor-pointer">
            <div className="flex flex-row justify-between items-center px-2" onClick={() => { setOpen(!open) }}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold rounded-sm">
                        Shift {props.number}
                    </h1>
                    <h2 className="text-gray-500 tracking-tight">
                        {DateTime.fromISO(props.from).toLocaleString(DateTime.TIME_24_SIMPLE)} - {DateTime.fromISO(props.to).toLocaleString(DateTime.TIME_24_SIMPLE)}
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
                            <Link href={`/employee/${item.id}`} key={index} passHref>
                                <div className={`transition-all ease-in-out duration-300 border-b px-2 hover:bg-gray-300 cursor-pointer flex flex-col ${animation}`} key={index}>
                                    <h1 className="text-lg font-semibold py-1">
                                        {item.name}
                                    </h1>
                                    <div className="text-gray-500">
                                        {item.healthStatus}
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                <div className={`transition-all bg-gray-200 ease-in-out duration-300 border-b px-2 hover:bg-gray-300 cursor-pointer flex flex-col items-center ${animation}`}
                onClick={() => {
                    addEmployee()
                }}>
                    <UilPlus />
                </div>
            </div>
        </div>
    )
}

export default TimeRoster