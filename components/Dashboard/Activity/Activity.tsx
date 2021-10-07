import { useEffect, useState } from "react"
import ActivityCard from "./ActivityCard"
import { getEmployeesSummary } from '../../../services/roster/dashboard/statistics'
import { DashboardSummary } from '../../../types/dashboard/summary'
import { Auth } from "aws-amplify"

const Activity = () => {
    const mockData = [
        {
            value: 1472,
            type: "Total Employees",
            change: 2.36
        },
        {
            value: 1472,
            type: "Number on leave",
            change: -22.36
        },
        {
            value: 1472,
            type: "New Employee",
            change: 2.36
        },
        {
            value: 1472,
            type: "Covid Rate",
            change: 7.36
        },
    ]

    const [summary, setSummary] = useState<DashboardSummary>()

    const getSummary = async () => {
        const { signInUserSession } = await Auth.currentAuthenticatedUser()
        const jwt =  signInUserSession.accessToken.jwtToken        
        const res = await getEmployeesSummary(jwt)
        setSummary(res)
    }

    useEffect(() => {
        getSummary()
    }, [])

    return (
        <div>
            <div className="flex flex-wrap gap-2">
                {/* {
                    mockData.map((item, index) => {
                        return (
                            <ActivityCard value={item.value} type={item.type} change={item.change} key={index} index={index} />
                        )
                    })
                } */}

                <ActivityCard value={summary?.employeesCount as number} type="Total Employees" change={summary?.employeesCountChange as number}/>
                <ActivityCard value={summary?.leaveCount as number} type="Employees on leave" change={summary?.leaveCountChange as number}/>
                <ActivityCard value={summary?.onsiteCount as number} type="Employees on site" change={summary?.onsiteCountChange as number}/>
                <ActivityCard value={summary?.covidCount as number} type="Covid Uptake" change={summary?.covidCountChange as number}/>
            </div>
        </div>
    )
}

export default Activity