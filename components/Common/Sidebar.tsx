import React from 'react'
// @ts-ignore
import { UisChart } from '@iconscout/react-unicons-solid'
// @ts-ignore
import { UilComparison, UilCommentDots } from '@iconscout/react-unicons'
import NavigationItem from '../Sidebar/NavigationItem'


const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-blue-900 text-white pt-4 pl-4 flex flex-col gap-10">
            <div className="flex flex-row gap-3 items-center">
                <div className="bg-blue-500 p-2 rounded-md">
                    <UilComparison size="20" />
                </div>
                
                <h1 className="text-2xl text-white font-semibold">
                    Dash
                </h1>
            </div>

            <div className="flex flex-col">
                <h3 className="text-xs text-blue-300 mb-3">
                    MAIN MENU
                </h3>

                <NavigationItem name="Dashboard">
                    <UisChart />
                </NavigationItem>

                <NavigationItem name="Inbox">
                    <UilCommentDots />
                </NavigationItem>

            </div>
        </div>
    )
}

export default Sidebar