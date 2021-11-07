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
import PieChartComponent from "../components/Homepage/PieChart"
import numeral from "numeral"

const Home: NextPage = () => {
    const router = useRouter()
    const [bar, setBar] = useState<any>([])
    const [line, setLine] = useState<any>([])
    const [barStats, setBarStats] = useState<any>({})
    const [pieStats, setPieStats] = useState<any>([])

    useEffect(() => {
        getAnalyticsBarGraph().then(res => {
            setBar(res)
            setBarStats(res[0])
        })

        getAnalyticsLineGraph().then(res => {
            setLine(res)
            const firstLine = res[0]
            let firstData: any = []
            firstData.push({
                name: "Total Cases",
                value: firstLine.totalCases
            })
            firstData.push({
                name: "Total Recovered",
                value: firstLine.totalRecovered
            })
            setPieStats(firstData)
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

                {
                    line && line.length > 0 &&
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-2">
                        <ActivityCard value={line[0].totalDeaths} type={"Total Deaths"} change={numeral((line[0].totalDeaths - line[1].totalDeaths) / line[1].totalDeaths).format('0.00')} />
                        <ActivityCard value={line[0].totalCases} type={"Total Cases"} change={numeral((line[0].totalCases - line[1].totalCases) / line[1].totalCases).format('0.00')} />
                        <ActivityCard value={line[0].totalRecovered} type={"Total Recovered"} change={numeral((line[0].totalRecovered - line[1].totalRecovered) / line[1].totalRecovered).format('0.00')} />
                        <ActivityCard value={line[0].newLocalCases} type={"New Local Cases"} change={numeral((line[0].newLocalCases - line[1].newLocalCases) / line[1].newLocalCases).format('0.00')} />

                    </div>
                }

                <div className="w-full grid lg:grid-cols-6 grid-cols-1 gap-2">
                    <div className="col-span-4">
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

                    <div className="col-span-2 flex flex-col h-full gap-2">
                        <h1 className="text-2xl mb-2">
                            Breakdown
                        </h1>
                        <div className="border rounded-md">
                            <PieChartComponent data={pieStats} />

                            <div className="grid grid-cols-2 px-4 py-2 gap-2">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xs text-gray-500">
                                        Total Cases
                                    </h2>
                                        {
                                            line && line.length > 0 &&
                                            <div className="text-xl font-semibold flex flex-row items-center gap-1">
                                                <div className="h-3 w-3 bg-blue-500 rounded-full" />
                                                <span>{line[0].totalCases}</span>
                                            </div>
                                        }
                                </div>

                                <div className="flex flex-col items-center">
                                    <h2 className="text-xs text-gray-500">
                                        Total Recovered
                                    </h2>
                                        {
                                            line && line.length > 0 &&
                                            <div className="text-xl font-semibold flex flex-row items-center gap-1">
                                                <div className="h-3 w-3 bg-green-500 rounded-full" />
                                                <span>{line[0].totalRecovered}</span>
                                            </div>
                                        }
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 text-xl font-semibold text-blue-900 border text-center flex flex-col justify-center">
                            Dash your way through Covid with us!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home