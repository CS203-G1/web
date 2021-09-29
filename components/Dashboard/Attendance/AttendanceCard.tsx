import React from "react"
import CardLayout from "../CardLayout"
import AttendanceChart from "./AttendanceChart"

const AttendanceCard = () => {
    return (
        <CardLayout header="Working History">
            <AttendanceChart />
        </CardLayout>
    )
}

export default AttendanceCard