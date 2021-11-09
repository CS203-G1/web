import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Common/Layout'
import EmployeeRosterItem from '../../components/Employees/EmployeeRosterItem'
import { getEmployee } from '../../services/employees/employees'
import { getRosterByEmployeeId } from '../../services/roster/roster/roster'
import { Employee as EmployeeType } from '../../types/Employee/employee'
import { Calendar } from 'antd';
import moment, { Moment } from 'moment'
import { DateTime } from 'luxon'


const Employee = () => {
    const router = useRouter()
    const { slug } = router.query

    const [employeeDetails, setEmployeeDetails] = useState<EmployeeType>()
    const [roster, setRoster] = useState<any>([])
    const [hoveredDate, setHoveredDate] = useState<Moment>()
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [name, setName] = useState("")
    const [heathstatus, setHeathStatus] = useState("")

    const employee = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt = signInUserSession.accessToken.jwtToken
        const res = await getEmployee(jwt, "49c13ace-ca48-44bb-a9e9-8e3c330862db", slug as string)
        if(res) {
            setHeathStatus(res.healthStatus)
            setEmail(res.email)
        }
        const roster = await getRosterByEmployeeId(jwt, slug as string)
        setEmployeeDetails(res as EmployeeType)
        setRoster(roster)
    }

    const changeCalanderDate = (date: Moment) => {
        setHoveredDate(date)
    }

    const renderCalanderDate = (date: Moment) => {
        if (roster) {
            for(let i = 0; i < roster.length; i++) {
                // console.log(date.format("d"));
                // console.log(moment(roster[i].date).format('d'));
                
                
                if (date.format("M D") === moment(roster[i].date).format("M D")) {
                    return (
                        <div>
                            {DateTime.fromISO(roster[i].fromDateTime).toLocaleString(DateTime.TIME_24_SIMPLE)} - {DateTime.fromISO(roster[i].toDateTime).toLocaleString(DateTime.TIME_24_SIMPLE)}
                        </div>
                    )
                }
            }
            
        }
        
    }

    useEffect(() => {
        if (!slug) return

        employee()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    return (
        <Layout header={employeeDetails?.name as string}>
            <div className="flex flex-row gap-10 w-full mb-6">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">
                                Email
                        </h2>

                            <div className="text-gray-500">
                                {email ? email : "-"}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">
                                Health Status
                        </h2>

                            <div className="text-gray-500">
                                {heathstatus ? heathstatus : "-"}
                            </div>
                        </div>
                    </div>
            <div className="flex flex-col w-full">
                <h1 className="text-xl font-bold mb-2">
                    Shifts
                </h1>
                <div className="flex flex-wrap gap-4">
                    {
                        roster && roster.map((item: any, index: number) => {
                            return (
                                <EmployeeRosterItem
                                    key={index}
                                    date={item.date}
                                    from={item.fromDateTime}
                                    to={item.toDateTime}
                                    setDate={changeCalanderDate} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="p-3 mt-4 bg-white">
                <Calendar value={hoveredDate} dateCellRender={renderCalanderDate}  />
            </div>
        </Layout>
    )
}

export default Employee