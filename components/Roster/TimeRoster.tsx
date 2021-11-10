import { useEffect, useState } from "react"
import { Employee } from "../../types/Employee/employee"
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight, UilPlus, UilTimes } from '@iconscout/react-unicons'
import Link from 'next/link'
import { DateTime } from "luxon"
import { addEmployeeRoster, removeEmployeeRoster } from '../../services/roster/roster/roster'
import { getAllEmployees } from '../../services/employees/employees'
import { Auth } from "aws-amplify"
import { message, Modal } from 'antd'
interface props {
    number: number
    from: string
    to: string
    employees: Employee[]
    numberOfEmployees: number
    rosterId: string
    refetch: () => void
}

const TimeRoster = (props: props) => {
    const [open, setOpen] = useState(false)
    const [employees, setEmployees] = useState<Employee[]>()
    const [addModal, setAddModal] = useState(false)
    const animation = open ? "max-h-36 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
    const [addEmployeeId, setAddEmployeeId] = useState("")

    const addEmployee = async (employeeId: string) => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            addEmployeeRoster(jwt, props.rosterId, employeeId)
                .then()
                .catch(e => {
                    message.error(e.message)
                })
        })
    }

    const deleteEmployee = async (employeeId: string) => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            removeEmployeeRoster(jwt, props.rosterId, "6149483b-5c17-45ae-9564-34e7b40dbfd7")
                .then()
                .catch(e => {
                    message.error(e.message)
                })
        })
    }

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            getAllEmployees(jwt).then(res => {
                setEmployees(res)
            })
        })
    }, [])

    return (
        <>
            <Modal title="Which employee do you want to add?" visible={addModal} footer={null} onCancel={() => { setAddModal(false) }}>
                <div className="flex flex-col w-full h-full max-h-96 overflow-auto">
                    {
                        employees && employees.map((item, index) => {
                            return (
                                <div className="flex flex-row py-2 px-1 hover:bg-gray-100" key={index} onClick={() => {
                                    addEmployee(item.id)
                                }}>
                                    <h1 className="text-lg font-semibold">
                                        {
                                            item.name
                                        }
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
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

                                <div className={`transition-all ease-in-out duration-300 border-b px-2 hover:bg-gray-300 cursor-pointer flex flex-col relative ${animation}`} key={index}>
                                    <div className="absolute z-30 right-0 hover:text-gray-500" onClick={() => {
                                        deleteEmployee(item.id)
                                    }}>
                                        <UilTimes />
                                    </div>
                                    <Link href={`/employee/${item.id}`} key={index} passHref>
                                        <h1 className="text-lg font-semibold py-1">
                                            {item.name}
                                        </h1>
                                    </Link>
                                    <div className="text-gray-500">
                                        {item.healthStatus}
                                    </div>
                                </div>

                            )
                        })
                    }
                    <div className={`transition-all bg-gray-200 ease-in-out duration-300 border-b px-2 hover:bg-gray-300 cursor-pointer flex flex-col items-center ${animation}`}
                        onClick={() => {
                            setAddModal(true)
                        }}>
                        <UilPlus />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeRoster