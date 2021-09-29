import { useState } from 'react'
import Sidebar from '../components/Common/Sidebar'
import Activity from '../components/Dashboard/Activity'
import Navbar from '../components/Common/Navbar'
import Layout from '../components/Common/Layout'

const Dashboard = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-3 w-full min-h-screen">
                <Activity />
                <div className="flex flex-row gap-3">
                    
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard