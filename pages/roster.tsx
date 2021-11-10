import React, { useEffect, useState } from "react"
import Layout from "../components/Common/Layout"
import { DateTime } from 'luxon'
// @ts-ignore
import { UilAngleDown, UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
// import RosterScheduling from "../components/Roster/ShiftScheduling"
import { getRosterByDay } from '../services/roster/roster/roster'
import { Auth } from "aws-amplify"
import TimeRoster from "../components/Roster/TimeRoster"

const Roster = () => {

    const [roster, setRoster] = useState([])
    const [employees, setEmployees] = useState()
    const [date, setDate] = useState(DateTime.now().toISODate())

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            getRosterByDay(jwt, date).then(res => {
                setRoster(res)
            })
        })
    }, [])

    return (
        <Layout header="Roster">
            {
                roster && roster.map((item: any, index: number) => {
                    return (
                        <>
                            <TimeRoster
                                key={index}
                                number={index + 1}
                                from={item.roster.fromDateTime} to={item.roster.toDateTime}
                                employees={item.employees}
                                numberOfEmployees={item.employees.length} 
                                rosterId={item.roster.id} />
                        </>
                    )
                })
            }
        </Layout>
    )
}
export default Roster