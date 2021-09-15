import { useState } from 'react'
import Sidebar from '../components/Common/Sidebar'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-white flex flex-row">
            <Sidebar />
        </div>
    )
}

export default Dashboard