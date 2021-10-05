import React from 'react'
// @ts-ignore
import { UisChart } from '@iconscout/react-unicons-solid'
// @ts-ignore
import { UilComparison, UilCommentDots, UilUserSquare, UilCalendarAlt, UilChartLine, UilSetting, UilQuestionCircle } from '@iconscout/react-unicons'
import NavigationItem from '../Sidebar/NavigationItem'


const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-blue-900 text-white flex flex-col justify-between">

            <div className="ml-4 my-4">
                <div className="flex flex-row gap-3 items-center mb-10">
                    <div className="bg-blue-500 p-2 rounded-md">
                        <UilComparison size="20" />
                    </div>
                
                    <h1 className="text-2xl text-white font-semibold">
                        Dash
                    </h1>
                </div>

                <div className="flex flex-col gap-4">

                    <div className="flex flex-col">
                        <h3 className="text-xs text-blue-300 mb-3">
                            MAIN MENU
                        </h3>
                        <NavigationItem name="Dashboard" path="/dashboard">
                            <UisChart />
                        </NavigationItem>
                        <NavigationItem name="Inbox"  path="/inbox">
                            <UilCommentDots />
                        </NavigationItem>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xs text-blue-300 mb-3">
                            WORKSPACE
                        </h3>
                        <NavigationItem name="Roster"  path="/roster">
                            <UilCalendarAlt />
                        </NavigationItem>
                        <NavigationItem name="Employees" path="/employees">
                            <UilUserSquare />
                        </NavigationItem>
                        <NavigationItem name="Analytics" path="/analytics">
                            <UilChartLine />
                        </NavigationItem>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-xs text-blue-300 mb-3">
                            General
                        </h3>
                        <NavigationItem name="Settings" path="/settings">
                            <UilSetting />
                        </NavigationItem>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-center rounded-md mx-4 p-7 mb-10 justyify-center bg-blue-800 relative">
                <div className="absolute top-0 left-0 right-0 mx-auto w-10 -mt-5 bg-blue-400 rounded-full">
                    <UilQuestionCircle size={40} />
                </div>

                <p>
                    Need help with Dash?
                </p>

                <button className="bg-blue-600 w-full px-3 py-2 rounded-md">
                    Go to help center
                </button>
            </div>
        </div>
    )
}

export default Sidebar