import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
// @ts-ignore
import { UilComparison } from '@iconscout/react-unicons'
import { getAnalyticsBarGraph, getAnalyticsLineGraph } from '../services/analytics/graph'
import ActivityCard from "../components/Dashboard/Activity/ActivityCard"
import { useRouter } from 'next/router'
import LineChartComponent from "../components/Homepage/LineChart"
import BarChartComponent from "../components/Homepage/BarChart"

const Home: NextPage = () => {
    const router = useRouter()
    const [bar, setBar] = useState([])
    const [line, setLine] = useState([])
    const [barStats, setBarStats] = useState({})

    useEffect(() => {
        getAnalyticsBarGraph().then(res => {
            setBar(res)
            setBarStats(res[0])
        })

        getAnalyticsLineGraph().then(res => {
            setLine(res)
        })
    }, [])

    return (
        <div>
            <div className="flex flex-row justify-between px-10 py-5 border-b items-center">
                <div className="flex flex-row gap-3 items-center">

                    <h1 className="text-2xl text-blue-900 font-semibold">
                        Dash
                    </h1>
                </div>

                <button className="px-4 py-2 rounded-md border hover:bg-blue-900 hover:text-white" onClick={() => { router.push("/login") }}>
                    Login
                </button>
            </div>

            <div className="flex flex-col gap-4 px-20 py-10">
                <h1 className="text-4xl tracking-tight">
                    Singapore Covid-19 Situation
                </h1>

                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-2">
                    <ActivityCard value={0} type={"Total Deaths"} change={-1} />
                    <ActivityCard value={0} type={"Total Deaths"} change={-1} />
                    <ActivityCard value={0} type={"Total Deaths"} change={-1} />
                    <ActivityCard value={0} type={"Total Deaths"} change={-1} />
                </div>

                <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2">
                    <div>
                        <h1 className="text-2xl mb-2">
                            Vaccination Statistics
                        </h1>
                        <div className="w-full border p-1 rounded-md">
                            <LineChartComponent data={bar.slice(0).reverse()} />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl mb-2">
                            Number of Cases
                        </h1>
                        <div className="w-full border p-1 rounded-md">
                            <BarChartComponent data={line.slice(0).reverse()} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home