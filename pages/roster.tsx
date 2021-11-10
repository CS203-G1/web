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

    const changeDate = (num: number) => {
        let curr = DateTime.fromISO(date)
        if (num < 0) {
            curr = curr.minus({days:1})
            console.log(curr);
            
            setDate(curr.toISODate())
        } else {
            curr = curr.plus({days:1})
            setDate(curr.toISODate())
        }
    }

    const refetch = async () => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            const id = user.attributes.sub
            getRosterByDay(jwt, date, id).then(res => {
                setRoster(res)
            })
        })
    }

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            const jwt = user.signInUserSession.accessToken.jwtToken
            const id = user.attributes.sub
            getRosterByDay(jwt, date, id).then(res => {
                setRoster(res)
            }).catch(e => {
                setRoster([])
            })
        })
    }, [date])

    return (
        <Layout header="Roster">
            <div className="flex flex-row justify-center gap-4 py-2 items-center">
                <div className="cursor-pointer" onClick={() => {changeDate(-1)}}>
                    <UilAngleLeft size="35" />
                </div>
                <div className="text-lg font-bold">
                    {date}
                </div>
                <div onClick={() => {changeDate(1)}}>
                    <UilAngleRight size="35" />
                </div>
            </div>
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
                                rosterId={item.roster.id}
                                refetch={refetch} />
                        </>
                    )
                })
            }
        </Layout>
    )
}
export default Roster