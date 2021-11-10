import { Calendar } from 'antd'
import { Auth } from 'aws-amplify'
import { DateTime } from 'luxon'
import moment from 'moment'
import { Moment } from 'moment'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Common/Layout'
import EmployeeRosterItem from '../../components/Employees/EmployeeRosterItem'
import Topbar from '../../components/User/Common/Topbar'
import { getEmployee } from '../../services/employees/employees'
import { getRosterByEmployeeId } from '../../services/roster/roster/roster'
import { Employee as EmployeeType } from '../../types/Employee/employee'

const UserDashboard = () => {
    const [employeeDetails, setEmployeeDetails] = useState<EmployeeType>()
    const [roster, setRoster] = useState<any>([])
    const [hoveredDate, setHoveredDate] = useState<Moment>()

    
    const employee = async () => {
        const user = await Auth.currentAuthenticatedUser()
        const jwt = user.signInUserSession.accessToken.jwtToken
        const res = await getEmployee(jwt, "49c13ace-ca48-44bb-a9e9-8e3c330862db", user.attributes.sub)

        try {
            const roster = await getRosterByEmployeeId(jwt, user.attributes.sub)
            setRoster(roster)
        } catch (e) {
            console.log(e);
            
        }
        setEmployeeDetails(res as EmployeeType)
        
    }

    const changeCalanderDate = (date: Moment) => {
        setHoveredDate(date)
    }

    const renderCalanderDate = (date: Moment) => {
        if (roster) {
            for(let i = 0; i < roster.length; i++) {
                // console.log(date.format("d"));
                // console.log(moment(roster[i].date).format('d'));
                
                
                if (roster[i] && date.format("M D") === moment(roster[i].date).format("M D")) {
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
        employee()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Layout header="Dashboard">
            <div className="flex flex-col w-full">
                <h1 className="text-xl font-bold mb-2">
                    Shifts
                </h1>
                <div className="flex flex-wrap gap-4">
                    {
                        roster && roster[0] && roster.map((item: any, index: number) => {
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

            {roster && roster[0] &&
                <div className="p-3 mt-4 bg-white">
                <Calendar value={hoveredDate} dateCellRender={renderCalanderDate}  />
            </div>}
        </Layout>
    )
}

export default UserDashboard