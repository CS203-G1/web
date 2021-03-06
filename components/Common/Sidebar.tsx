import React, { useEffect, useState } from 'react'
// @ts-ignore
import { UisChart } from '@iconscout/react-unicons-solid'
// @ts-ignore
import { UilStethoscope, UilComparison, UilCommentDots, UilUserSquare, UilCalendarAlt, UilChartLine, UilSetting, UilQuestionCircle, UilFileUploadAlt } from '@iconscout/react-unicons'
import NavigationItem from '../Sidebar/NavigationItem'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'

interface props {
    close?: boolean
}

const Sidebar = (props: props) => {

    const visible = !props.close ? "" : "translate-x-0 visible"
    const router = useRouter()
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {            
            const group = user.signInUserSession.accessToken.payload["cognito:groups"]
            if (group.includes("ROLE_EMPLOYER")) {
                setAdmin(true)
            }
        })
    })

    const navItems = admin ?
        // !ADMIN SIDEBAR
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="text-xs text-blue-300 mb-3">
                    MAIN MENU
                </h3>
                <NavigationItem name="Dashboard" path="/dashboard">
                    <UisChart />
                </NavigationItem>
                {/* <NavigationItem name="Inbox" path="/inbox">
                    <UilCommentDots />
                </NavigationItem> */}
            </div>

            <div className="flex flex-col">
                <h3 className="text-xs text-blue-300 mb-3">
                    WORKSPACE
                </h3>
                <NavigationItem name="Roster" path="/roster">
                    <UilCalendarAlt />
                </NavigationItem>
                <NavigationItem name="Employees" path="/employees">
                    <UilUserSquare />
                </NavigationItem>
                {/* <NavigationItem name="Analytics" path="/analytics">
                    <UilChartLine />
                </NavigationItem> */}
                <NavigationItem name="Tests" path="/tests">
                    <UilStethoscope />
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
        : 
        // !USER SIDEBAR
        <div className="flex flex-col gap-4">

        <div className="flex flex-col">
            <h3 className="text-xs text-blue-300 mb-3">
                MAIN MENU
            </h3>
            <NavigationItem name="Dashboard" path="/user/dashboard">
                <UisChart />
            </NavigationItem>
            {/* <NavigationItem name="Inbox" path="/inbox">
                <UilCommentDots />
            </NavigationItem> */}
            <NavigationItem name="Test Upload" path="/user/document-upload">
                <UilFileUploadAlt />
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

    return (
        <div className={`h-full w-64 bg-blue-900 text-white flex flex-col justify-between transform duration-300 ease-in-out ${visible}`}>

            <div className="ml-4 my-4">
                <div className="flex flex-row gap-3 items-center mb-10">
                    <div className="bg-blue-500 p-2 rounded-md">
                        <UilComparison size="20" />
                    </div>

                    <h1 className="text-2xl text-white font-semibold">
                        Dash
                    </h1>
                </div>

                { navItems }
            </div>

            <div className="flex flex-col gap-4 items-center rounded-md mx-4 p-7 mb-10 justyify-center bg-blue-800 relative">
                <div className="absolute top-0 left-0 right-0 mx-auto w-10 -mt-5 bg-blue-400 rounded-full">
                    <UilQuestionCircle size={40} />
                </div>

                <p>
                    Need help with Dash?
                </p>

                <button className="bg-blue-600 w-full px-3 py-2 rounded-md"
                    onClick={async () => {
                        try {
                            await Auth.signOut
                            router.push("/")
                        } catch (e) {
                        }
                    }}>
                    Go to help center
                </button>
            </div>
        </div>
    )
}

export default Sidebar