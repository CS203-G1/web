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
                    const from = DateTime.fromISO(item.roster.fromDateTime).toLocaleString(DateTime.TIME_24_SIMPLE)
                    const to = DateTime.fromISO(item.roster.toDateTime).toLocaleString(DateTime.TIME_24_SIMPLE)
                    return (
                        <>
                            <TimeRoster
                                key={index}
                                number={index + 1}
                                from={from} to={to}
                                employees={item.employees}
                                numberOfEmployees={item.employees.length} />
                        </>
                    )
                })
            }
        </Layout>
    )
}
export default Roster