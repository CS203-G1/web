import React from "react"
import CardLayout from "../CardLayout"
import TrendChart from "./TrendChart"

const TrendCard = () => {
    return (
        <CardLayout header="Trends" flex="flex-1">
            <div className="flex flex-col h-full justify-center">
                <TrendChart />
            </div>
        </CardLayout>
    )
}
export default TrendCard