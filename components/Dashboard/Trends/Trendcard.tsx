import React from "react"
import CardLayout from "../CardLayout"
import TrendChart from "./TrendChart"

const TrendCard = () => {
    return (
        <CardLayout header="Trends" flex="flex-initial">
            <TrendChart />
        </CardLayout>
    )
}
export default TrendCard