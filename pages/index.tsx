import { NextPage } from "next"
import React from "react"
import styles from '../styles/Home.module.css'
// @ts-ignore
import { UilComparison } from '@iconscout/react-unicons'

const Home: NextPage = () => {
    return (
        <div>
            <div className="flex flex-row justify-between px-10 py-5 border-b">
                <div className="flex flex-row gap-3 items-center">
                    {/* <div className="bg-blue-500 p-2 rounded-md">
                        <UilComparison size="20" />
                    </div> */}

                    <h1 className="text-2xl text-blue-900 font-semibold">
                        Dash
                    </h1>
                </div>
            </div>

            <div className="flex flex-col gap-4 px-20 py-10">
                <h1 className="text-4xl tracking-tight">
                    Singapore Covid-19 Situation
                </h1>
            </div>
        </div>
    )
}

export default Home