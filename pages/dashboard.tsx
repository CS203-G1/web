import { useState } from 'react'
import Sidebar from '../components/Common/Sidebar'
import { UilSearch, UilBell, UilUserCircle, UilAngleDown } from '@iconscout/react-unicons'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-row">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <div className="flex flex-row justify-between items-center w-full bg-white px-10 py-4">
                    <h1 className="text-2xl font-semibold">
                        Dashboard
                    </h1>

                    <div className="flex flex-row gap-4 items-center">
                        <div className="bg-gray-200 p-1 rounded-full">
                            <UilBell size={20} />
                        </div>

                        <div className="bg-gray-200 p-1 rounded-full">
                            <UilSearch size={20} />
                        </div>

                        <div className="flex flex-row gap-2 items-center">
                            <UilUserCircle size={30} />

                            <p>
                                Bing Yu Yap
                            </p>

                            <div className="mt-1">
                                <UilAngleDown size={20} />
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard