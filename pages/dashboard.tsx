import { useState } from 'react'
import Sidebar from '../components/Common/Sidebar'
import Navbar from '../components/Dashboard/Navbar'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-row">
            <Sidebar />
            <Navbar />


        </div>
    )
}

export default Dashboard