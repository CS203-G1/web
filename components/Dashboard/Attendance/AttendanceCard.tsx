import React from "react"
import CardLayout from "../CardLayout"
import AttendanceChart from "./AttendanceChart"

const AttendanceCard = () => {
    return (
        <CardLayout header="Working History" flex="flex-initial">
            <div className="flex flex-row">
                <AttendanceChart />
            </div>
        </CardLayout>
    )
}

export default AttendanceCard